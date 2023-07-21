import { Descriptions, Progress, Layout, Segmented } from "antd"
import { useState } from "react";

export default function PersonalInfo() {

    const { Content , Header, Footer, Sider } = Layout;
    const [exp,setExp] = useState("Years");
    const [flag,setFlag] = useState("Leadership");
    const start = new Date(2016,8,1);
    const now = new Date();
    const diffTime = Math.abs(now  - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const expmap = {
        "Weeks" : Math.ceil(diffDays/7),
        "Months":Math.ceil(diffDays/30),
        "Years": Number(diffDays/365).toFixed(1)
    }

    const ulStyle = {display:'grid', gap: '10px', font: ''};


    const skills = {
        "Python & FastAPI" : 4.5,
        "Pandas & Data Visualisation": 4,
        "MySQL & Mongo DB" : 4,
        "Javascript & (ReactJS, Next JS)": 3.75,
        "S3, SES API, Open Stack, Google Firebase" : 3.5,
        "Devops, Queues & Caching" : 3
    }

    return (
        <Layout >
            <Content style={{backgroundColor:'white' , padding:"2%" , height: "90vh"}}>
            <h3 style={{backgroundColor:'white', fontStyle : 'oblique', font : "initial" }}  > Welcome, I am a
            Senior engineer at an MNC. <br></br>
            Have a great deal of experience in full stack development and Data engineering.
            <br></br>
            Prefer remote jobs, temporarily okay to travel.
            </h3>
            <Descriptions title={""} layout="horizontal" size="small"  column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                <Descriptions.Item label="Email">venu.mallik@gmail.com</Descriptions.Item>
                <Descriptions.Item label="Telephone">+91 98859 20369</Descriptions.Item>
                <Descriptions.Item label="Address">
                    Vijayawada , Andhra Pradesh, India
                </Descriptions.Item>
                <Descriptions.Item label="Links"><a target="_blank" href={"https://www.github.com/vrworkers"} > Github </a>,&nbsp;<a  target="_blank" href={"https://www.linkedin.com/in/venumallik"} >Linkedin</a>&nbsp; <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vRYWPmGjM90SLMVlSbc0TgisJ4ww4EsjEg9DESVEwUU9kCOl4_e6t3fgs7c7F7zIVdJn1uEVvG-8W41/pub?embedded=true" > Resume </a></Descriptions.Item>
                <Descriptions.Item label="Education">Information tech, JNTU Kakinada 2012-16 </Descriptions.Item>
                <Descriptions.Item label="Experience">
                {expmap[exp]} &nbsp;&nbsp;<Segmented options={[ 'Weeks', 'Months', 'Years']} size="small"  onChange={(v)=>setExp(v)} >
                 </Segmented>  </Descriptions.Item>
                
            </Descriptions>
            <Descriptions title={""} size="small" layout="horizontal"  column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }} >
                { Object.entries(skills).map(([k,v],i) => 
                            {
    
                                return <Descriptions.Item label={k} key={i}>
                                    <Progress type="circle" percent={v*20} size={30} />
                                </Descriptions.Item>
                                
                        })}
            </Descriptions>

            <Segmented options={[ 'Leadership', 'Backend', 'Frontend', 'Databases', 'Devops', 'Websites']} size="small"
              onChange={(v)=>setFlag(v)} > </Segmented>
              <div>
            {
                flag === 'Backend' && 
                        <ul  style={ulStyle} >
                            <li> Better understanding of Open API & JSON Schema for models.</li><li>
                            Have production scale experience using FastAPI in Python, Jax RS in Java and 
                            hands on experience using express framework in Javascript. </li><li>
                            Oauth2 authentication & experience implementing RBAC, ACL, ABAC authorisation layers. <br></br></li><li>
                            Integrating with third party libraries like Payment gateways, google firebase, cloudflare logs,
                            resumable or s3 upload protocols for own data storage etc. <br></br></li><li>
                            Have Professional experience using pandas and data visualization libraries
                            like Matplotlib, Seaborn, Plotly Dash & Bokeh.</li>
                        </ul>            
            }
            {
                flag === 'Frontend' && 
                        <ul style={ulStyle}> 
                           <li> Production ready Content management systems using React Hooks & Antd framework. <br></br></li>
                           <li>
                            Production ready end user websites using ReactJS , NextJS libraries. <br></br></li>
                            <li>
                            Hands on experience in using libraries like Shaka player & Shaka streamer, Uppy, 
                            google firebase, google charts, Vega-lite charts etc. <br></br></li>
                            <li>
                            Experience in Integrating user facing elements with backend api i.e 
                            particularly owning a feature in all layer and converting design to production.</li>

                        </ul>            
            }
            {
                flag === 'Databases' && 
                        <ul style={ulStyle}> 
                           <li> Production experience using sqlalchemy and Motor in Python, JDBC in JAVA for applications. 
                            <br></br></li>
                            <li>
                            Production experience in using Oracle, MySQL and MongoDB in building Rest APIs. </li><li>
                            Extracting Reports fromm google analytics using BigQuery. <br></br></li>
                        </ul>            
            }
            {
                flag === 'Devops' && 
                        <ul style={ulStyle}> 
                            <li>Experience in using S3 API , Open Stack Upload API, google buckets etc. <br></br></li><li>
                            Experience using Azure devops for CI/CD and task tracking. <br></br></li><li>
                            Experience using cloudflare videos & cloudflare images  
                            api for serving at scale. <br></br></li><li>
                            Hands on experience using in house repos i.e onedev, cloudflare pages,
                            google scripts, deploying to Virtual machines in google, pythonanywhere etc. <br></br></li><li>
                            Hands on experience using docker to spin up Minio s3, Redis, RabbitMQ and other services for development.</li>
                        </ul>            
            }
            {
                flag === 'Leadership' &&
                <ul style={ulStyle} >
                    <li> Lead a team in query optimisation, reducing the redundant joins & sub queries.
                    </li>
                    <li> Microservices & frontend developer collaborating with one designer, android, ios developer in a team of 5.
                    </li>
                    <li>
                        Lead the Code quality reviews and optimisation, <u>reduced from 10k lines to 2k lines of code and saved 45 minutes execution time in a ETL project.</u>
                        the total execution time is brought down from 2 Hours to 1 Hour 10 Minutes .
                    </li>
                    <li>
                        <u>Reverse engineered Schema from C# enums of prop tool</u> to reduce the steep adoption curve for all stake holders.
                        Mentored them doing code reviews & enforcing best practices using linting, style guides & low code patterns.
                    </li>
                    <li> 
                    <a target="_blank" href="/stack.png">Popular libraries</a> shows comparision of adoption between FastAPI, Django, Flask, Expressjs, NextJS, AntD.
                    </li>
                    <li> I have production ready exposure to FastAPI,AntD, NextJS, Express JS to build full stack applications </li>
                </ul>


            }

            {
                flag === 'Websites' && 
                <ul style={ulStyle} >
                    <li> The following are Professional and other websites i worked on </li>
                    <li> <a href="https://minipix.in" target="_blank" >React OTT website in a previous company i am part of</a>
                    </li>
                    <li> <a href="https://minipix-api.ibee.ai/docs" target="_blank" >Fastapi api supporting above react website</a>
                    </li>                
                    <li> <a href="https://citygrid.pages.dev" target="_blank" >Cities & Geodistance btw them</a>
                    </li>
                </ul>
            }
            </div>

        </Content>
    </Layout> 
)}