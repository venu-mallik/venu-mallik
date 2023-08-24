import { Descriptions, Progress, Layout, Segmented, Menu, Divider } from "antd"
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
            
          <Layout.Header
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div className="demo-logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[flag]} items={[ 'Leadership', 'Backend', 'Frontend', 'Databases', 'Cloud', 'Education', 'Experience'].map((a)=> ({'key' : a, 'label': a}) )}
              onClick={(e) => { setFlag(e.key) }} />
          </Layout.Header>
            <Content style={{backgroundColor:'white' , padding:"2%" , height: "90vh"}}> 
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
                            Extracting Reports from google analytics using BigQuery. <br></br></li>
                        </ul>            
            }
            {
                flag === 'Cloud' && 
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
                    <li>
                        Innominds - Data engineering project at Energy Exemplar
                        <ol>
                            <li>Lead the Code reviews and optimisation, reduced codebase from 10000 lines to 2000 lines of code and saved 45 minutes execution time.</li>
                            <li> the total execution time is brought down from 2 Hours to 1 Hour 10 Minutes .</li>
                    
                            <li>Reverse engineered Schema from C# enums of prop tool to reduce the steep adoption curve and save time for all stake holders.</li>
                            <li>100+ Pydantic classes with 1500+ memberships and 4000+ properties are auto generated using Json Schema and Enum rules .</li>
                        </ol>
                    </li>
                    
                    <li> Lead Full stack developer of <a href="https://minipix.in" target="_blank" >OTT website </a> consuming 
                     <a href="https://minipix-api.ibee.ai/docs" target="_blank" > FastAPI </a> in a team of 5 at IBEE software solutions from 2021 to 2022.
                            <ol> 
                                <li>Manager</li>
                                <li>Tech Lead CI/CD, production and Video Engineering</li>
                                <li>Me - Lead Full stack developer</li>
                                <li>Desinger - UI/UX</li>
                                <li> Android developer</li>
                            </ol>
                    </li>
                    <li>
                         TCS - Retiring proprietary tool in favour of open source at USAA.
                        <ol>
                            <li>The project is to reverse engineer 500+ screens of progress 4GL into Java wicket screens</li>
                            <li> The database is migrated from optim to oracle</li>
                            <li>Lead a team in query optimisation, reducing the redundant joins & sub queries.</li>
                        </ol> 
                    </li>
                    <li> 
                    <a target="_blank" href="/stack.png">Popular libraries</a> shows comparision of adoption between FastAPI, Django, Flask, Expressjs, NextJS, AntD.
                    </li>
                    <li> I have production ready experience with FastAPI,AntD, NextJS, Express JS to build full stack applications. </li>
                </ul>


            }

            {
                flag === 'Education' && 
                <ul style={ulStyle} >
                                    
                    <li> <a href="https://citygrid.pages.dev" target="_blank" >Cities, Climate and invisible impacts on health W.I.P</a>
                    </li>
                    <li>
                        Free lance data engineering project with a lot of domain knowledge involved : <a href="https://github.com/vrworkers/Astrodata">Timeseries Analysis</a>
                    </li>
                    <li>Samples built in tasks <a href="https://github.com/vrworkers/lambda-s3-dynamo" target="_blank">Aws lambda Sample</a> ,
                         <a href="https://github.com/vrworkers/Auth0_Fastapi" target="_blank">FastAPI with Auth0</a> ,
                         <a href="https://github.com/vrworkers/Fastapi-sample-with-redis" target="_blank">FastAPI with redis</a>
                    </li>
                     <h3>Learning</h3>
                     
                     
                     <li><a href="https://www.hackerrank.com/vrworkers" target="_blank">Hacker Rank certifications</a>
                     </li>
                     <li><a href="https://learn.microsoft.com/en-US/users/venumallikbellamkonda-3675/transcript/dlgo1hnq9j0x9zw" target="_blank">Innominds Microsoft Learning - 2022</a>
                     </li>
                     <li><a href="/IZO-851.pdf" target="_blank">Java Standard Edition 6 Programmer Certified Professional</a>
                     </li>
                     
                     <li><a href="/IZO-897.pdf" target="_blank">Java Platform, Enterprise Edition 6 Web Services Developer Certified Expert Exam</a>
                     </li>
                     <li><a href="https://drive.google.com/file/d/1XFj9w30oqBA6LT_371lz-PykZ6GHaFBI/view?usp=sharing" target="_blank">Hadoop Training - 2015</a>
                     </li>
                     <li>B.Tech / Information Technology:2016 - 86% </li>
                     <li>12th / Plus 2 : 2011  - 83%</li>
                     <li>10th Class/SSC : 2009 - 86%</li>
                </ul>
            }
            {
                flag === 'Experience' && 
                        <ul style={ulStyle}> 
                            <li>Tata Consultancy services - Selected via codevita, served from 2016 August to 2018 May</li>
                            <li> Remote Python developer at <a href="https://www.linkedin.com/company/insisiv-labs/?originalSubdomain=in" target="_blank"> Insisiv labs </a> : 2018 June to 2018 August</li>
                            <li> Freelance Developer : 2018 August to  2020 August </li>
                            <li> Python Developer at <a href="https://www.linkedin.com/company/kremlin-tech-ventures/about/" target="_blank"> Kremlin Tech </a> for two months, a affiliate of IBEE software solutions</li>
                            <li> Remote Senior engineer at IBEE software solutions pvt ltd : Jan 2021 - July 2022</li>
                            <li> Remote Senior software engineer at Innominds software pvt ltd : July 2022 - Present  </li>
                        </ul>           
            }
            </div>
            <Divider></Divider>
            <Descriptions title={"Contact Information"} layout="horizontal" size="small"  column={{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="Name">Venu Mallik Bellamkonda</Descriptions.Item>
                <Descriptions.Item label="Email">venu.mallik@gmail.com</Descriptions.Item>
                <Descriptions.Item label="Telephone">+91 98859 20369</Descriptions.Item>
                <Descriptions.Item label="Address">
                    Vijayawada , Andhra Pradesh, India
                </Descriptions.Item>
                <Descriptions.Item label="Links"><a target="_blank" href={"https://www.github.com/vrworkers"} > Github </a>,&nbsp;<a  target="_blank" href={"https://www.linkedin.com/in/venumallik"} >Linkedin</a>, &nbsp;<a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vRYWPmGjM90SLMVlSbc0TgisJ4ww4EsjEg9DESVEwUU9kCOl4_e6t3fgs7c7F7zIVdJn1uEVvG-8W41/pub?embedded=true" > Resume </a></Descriptions.Item>
                <Descriptions.Item label="Education">Information technology 2012-16 </Descriptions.Item>
                <Descriptions.Item label="Experience">
                {expmap[exp]} &nbsp;&nbsp;<Segmented options={[ 'Weeks', 'Months', 'Years']} size="small"  onChange={(v)=>setExp(v)} >
                 </Segmented>  </Descriptions.Item>
                
            </Descriptions>
            <Divider ></Divider>
            <Descriptions title={"Skills"} size="small" layout="horizontal"  column={{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }} >
                { Object.entries(skills).map(([k,v],i) => 
                            {
    
                                return <Descriptions.Item label={k} key={i}>
                                    <Progress type="circle" percent={v*20} size={30} />
                                </Descriptions.Item>
                                
                        })}
            </Descriptions>


        </Content>
    </Layout> 
)}