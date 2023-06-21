import { useEffect, useState } from 'react';
import { Col, Row, Select, Layout, Table, Menu, Tag, InputNumber, Tooltip } from 'antd';
import { cities } from '../components/indiacities';
import { getDistanceFromLatLonInKm } from '@/components/utils';


const isSSREnabled = () => typeof window === 'undefined';

var map;
export default function CitiesDistance() {

  const [data, setData] = useState([]);
  const [selectedCity, setselectedCity] = useState("Vijayawada");
  const [pop, setPop] = useState(200000);
  const [coor, setcoor] = useState({ lat: 16.50, lon: 80.64 })

  const times = [];
  useEffect(() => {
    if (window) {
      if (map) { 
        map = map.off();
        map = map.remove(); } 
      let contain = []
      let geofeature = []
      let activeCity = cities.filter((a) => a.ascii_name === selectedCity);
      activeCity = activeCity.length > 0 ? activeCity[0] : cities[0];
      let tcoor = { lat: activeCity.coordinates.lat, lon: activeCity.coordinates.lon };
      setcoor(tcoor) 

      map = L.map('map', {
        center: [tcoor.lat, tcoor.lon],
        zoom: 5
      });
      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18
      }).addTo(map);


      cities.map((rec) => {
        let d = getDistanceFromLatLonInKm(tcoor.lat, tcoor.lon, rec.coordinates.lat, rec.coordinates.lon);
        if (rec.population > pop)
          contain.push({
            'city1': rec.ascii_name, 'pop1': rec.population, 'pop2': activeCity.population,
            'distance': d, 'city2': activeCity.ascii_name,
            'lat1': rec.coordinates.lat, 'lon1': rec.coordinates.lon
          })
      })

      contain.sort((a,b) => a.distance - b.distance)
      contain.slice(0,10).map((b)=>{
        let line = [[tcoor.lat, tcoor.lon], [b.lat1, b.lon1]];

        L.polyline(line, {color: 'red'}).addTo(map).bindPopup(
          `${b.city1}-${b.city2}-${Number(b.distance).toFixed(0)}`).openPopup();

        // zoom the map to the polyline
        //map.fitBounds(polyline.getBounds());

        L.circle([b.lat1 , b.lon1]
          ,{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 1/(b.pop1),
            radius: 0.0005*b.pop1
        }).addTo(map);
      });
      setData(contain)
    }

  }, [ selectedCity, pop])


  function onChangeTable(pagination, filters, sorter, extra) {
    console.log('params', sorter, extra);
    let col = sorter.field;
    let dat = data.sort((a, b) => a[col] - b[col])
    setData(dat);
  }

  function tranformDatatoGoogleChart(data) {
    let book = []
    let header = Object.keys(data[0]);
    book.push(['lat', 'lon', 'pop'])
    data.map((b) => {
      book.push([b.lat1, b.lon1, b.pop1])
    })
    return book.slice(0, 25);
  }

  return ( 
            !isSSREnabled() ?
            <>   
                <h4>Plot the nearest cities to a town/city, above a population threshold</h4>
                <Select style={{ width: '500px' }} title={"Select the city from which you want to measure"}
                  placeholder={'Select City'} allowClear showSearch
                  value={selectedCity} onChange={(v) => setselectedCity(v)} >
                  {cities.map((b, _) => {
                    return <Select.Option key={b.ascii_name} >{b.ascii_name}</Select.Option>
                  })}
                </Select>
                <Select style={{ width: 200 }} placeholder={"Select population limit"} value={pop}
                title={"Filter the cities by population limit"}
                  onChange={(v) => setPop(v)}>
                  {
                    [1000, 2000, 5000, 10000, 15000, 25000, 50000, 75000, 100000, 200000, 500000, 1000000, 2000000].map((b) => {
                      return <Select.Option key={b}>{b}</Select.Option>
                    })}
                </Select>
                


                <div id="map" style={{ height: 600 }}></div>
                <Table dataSource={data} onChange={onChangeTable} >
                  <Table.Column dataIndex={'city1'} title={'city1'} filterIcon filterSearch></Table.Column>
                  <Table.Column dataIndex={'city2'} title={'city2'} render={(v, _) => v} ></Table.Column>
                  <Table.Column dataIndex={'pop1'} title={'pop1'} render={(v, _) => v}
                    sorter={true} sortDirections={['ascend' | 'descend']} showSorterTooltip sortOrder='descend'></Table.Column>
                  <Table.Column dataIndex={'pop2'} title={'pop2'} render={(v, _) => v}   ></Table.Column>

                  <Table.Column dataIndex={'distance'} title={'distance'} render={(v, _) => v}
                    sorter={true} sortOrder='ascend' sortDirections={['ascend' | 'descend']} ></Table.Column>
                </Table>

              </>: null
  )
}
