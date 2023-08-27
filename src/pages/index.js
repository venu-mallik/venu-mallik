import { useEffect, useState } from 'react';
import {
  GeoVector, Observer, Equator
  , Body, AstroTime, NextGlobalSolarEclipse, SearchLunarEclipse, MoonPhase,  SearchMoonNode
} from 'astronomy-engine';
import { Col, Row, Select, Layout, Table, Menu, Tag, Card } from 'antd';
import { SearchMoonQuarter } from 'astronomy-engine';
import { tabsList } from '@/components/menu';
import PersonalInfo from '@/components/resume';
import vegaEmbed from 'vega-embed';

const isSSREnabled = () => typeof window === 'undefined';

function getLahari(d){
  if(d instanceof Date){
  let a = (16.90709*d.year/1000) - 0.757371*(d.year/1000)*(d.year/1000) - 6.92416100010001000;
  let b = ((d.month-1+d.day)/30) * 1.1574074/1000;
  return Math.abs(a+b); }
  return 23.5

}

export default function Home() {

  const [activeTab, setActiveTab] = useState(-1);
  const [res, setRes] = useState(1);
  const [year, setyear] = useState(2000);
  const [points,setPoints] = useState(200);
  const [data, setData] = useState([]);
  const [selectedBodies, setselectedBodies] = useState([]);
  const bodies = [Body.Sun, Body.Moon, Body.Mercury, Body.Venus, Body.Earth, Body.Mars, Body.Jupiter, Body.Saturn, Body.Uranus, Body.Neptune, Body.Pluto];
  const orbitals = [ Body.Earth, Body.Mercury, Body.Venus, Body.Mars, Body.Jupiter, Body.Saturn, Body.Uranus, Body.Neptune, Body.Pluto];
  const obs = new Observer(16.52, 80.62, 25);
  const MQEnum = { 0: "Full Moon", 1: "", 2: "New Moon", 3: "", 'partial': 'partial', 'total': 'total', 'annular': 'annular', 'penumbral': 'penumbral' };

  const times = [];


  useEffect(() => {
    if (activeTab < 1)
      return;
    let contain = [];
    const time = new AstroTime(new Date(`${year}-01-01T00:00:00.000+05:30`));
    const JD = new AstroTime(new Date(1900,0,1,0,0,0));
    console.log(year, time)
    Array(points).fill().map((_, index) => {
      times.push(time.AddDays(index * res))
    })

    if (activeTab == 1 || activeTab == 2 || activeTab == 3) {
      Object.values(times).map((tim, index) => {
        let tmp = { "time": tim.date };
        let lahiri = getLahari(tim.date);
        Object.values(selectedBodies).map((b) => {
          if(['rahu','ketu'].includes(b) === false){
              
          tmp[b] = Number(Equator(b, tim, obs, false, false).ra * 15).toFixed(2)
          if(activeTab == 2 || activeTab == 3){
            tmp[b] = Math.round(Number(Equator(b, tim, obs, false, false).ra * 15).toFixed(2)/30) 
            tmp[b] = tmp[b] > lahiri ? tmp[b] - lahiri : (tmp[b]+360) - lahiri;
          }
         }
        })
        let t = 1.018;
        let d = (JD.date.getTime() - tim.date.getTime())/(1000*60*60*24);
        console.log(d,t,lahiri)
        tmp['rahu'] = (259.183 - 0.05295*d + 0.002078*Math.pow(t,2)  + 0.000002*Math.pow(t,3))%360;
        tmp['rahu'] = tmp['rahu'] > lahiri ? tmp['rahu'] - lahiri : (tmp['rahu']+360) - lahiri;
        tmp['rahu'] = tmp['rahu']%360
        tmp['ketu'] = tmp['rahu'] > 180 ? tmp['rahu'] - 180 : tmp['rahu'] +360 - 180;  
        tmp['mooncycle'] = Math.floor(MoonPhase(tim).toFixed(2) / 12)
        contain.push(tmp);
      })
      if(activeTab == 3){
        let tranform = [];
        let a = contain[0];
        contain.map((b)=>{
          let tmp = {}
          Object.entries(b).map(([k,v])=>{
              if(bodies.includes(k)){
                let p = v - a[k];
                if(p !== 0)  
                tmp[k] = v;
          }})
          if(Object.values(tmp).length > 0)
            tranform.push( { ...b , ...tmp})
          a = b;
        })
        contain = tranform;
      }
      setData(contain);
      var vlSpec = {
        width: 1000,
        height: 400,
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        data: {
          values: contain
        },
        "repeat": { "layer": selectedBodies},
        "spec":{
        "mark": {"type":"point", "tooltip": true },
        "encoding": {
          "x": {"type": "temporal", "field": "time"},
          "y": { "field": {"repeat": "layer"}, "type": "quantitative"},
          "color": {"datum": {"repeat": "layer"}, "type": "nominal"}
        }
      }
      };
  
      // Embed the visualization in the container with id `vis`
      vegaEmbed('#vis', vlSpec);
    }
    console.log(activeTab, SearchMoonQuarter(time));
    if (activeTab == 4 || activeTab == 7 || activeTab == 8) {
      //contain = [];
      let ngstime = time;
      let sgstime = time;
      Array(points).fill().map((_, index) => {
          let ngs = SearchLunarEclipse(ngstime);
          let sgs = NextGlobalSolarEclipse(ngstime);
          contain.push({ "time" : ngs.peak.date , "lon": ngs.longitude, "solareclipse": sgs.peak.date.toISOString().slice(0,10), "lunareclipse": ngs.peak.date.toISOString().slice(0,10), "lt": ngs.latitude });
          ngstime = ngs.peak.AddDays(2);
          sgstime = sgs.peak.AddDays(2);
      })
      setData(contain);
    }
    console.log(contain)

  }, [selectedBodies, year, res, activeTab, points]);

  function onChangeTable(pagination, filters, sorter, extra) {
    console.log('params', sorter, extra);
    let col = sorter.field;
    let dat = data.sort((a, b) => a[col] - b[col])
    setData(dat);
  }

  return (
    <main>{!isSSREnabled() ?
      <>
            {
              activeTab == -1 && <PersonalInfo/>
            } 

        </>
      : null}</main>
  )
}
