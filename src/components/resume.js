import { Descriptions, Progress, Layout, Segmented, Divider,Form, Button, Card,
         Timeline, Collapse, Space, Drawer, Input, InputNumber } from "antd"
import { useEffect, useState } from "react";
import { PageHeader } from "@ant-design/pro-components";
import { HistoryOutlined, ApiOutlined, DatabaseOutlined, HomeOutlined, TrophyOutlined, 
    FileTextOutlined, ReadOutlined, GithubOutlined, LinkedinOutlined, HighlightOutlined } from "@ant-design/icons";

const postDataToEmail = (data) => {

    fetch("https://formspree.io/f/xnqerpaj", {
      'body' : JSON.stringify(data) ,
      'method' : 'POST'
    }).then(()=> console.log("Posted Succesfully")).catch(err => console.log(err));
  }
  
  const MyForm = () => {
  
    return (
      <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="Vertical"
      style={{ maxWidth: 1000 }}
      title="Submit Requirement"
      action={"https://formspree.io/f/xnqerpaj"}
      method='post'
      onFinish={(b)=> postDataToEmail(b)  }
    >
        <Form.Item label="Name" name={"name"} required>
            <Input placeholder='Please enter your Name'></Input>
        </Form.Item>
      <Form.Item label="Email" name={"email"} required>
          <Input type='email' placeholder='Please enter your email'></Input>
      </Form.Item>
      <Form.Item label="Describe" name="describe" required>
            <Input.TextArea size='large' rows={5} placeholder='write in detail your requirement or use case or feedback'></Input.TextArea>
        </Form.Item>
      <Form.Item label="Costs Now" name="cost" >
        <InputNumber  min={0} max={100000} addonAfter={'USD/Month'} />
      </Form.Item>
      <Form.Item label="Target budget" name="targetBudget">
        <InputNumber  min={0} max={100000} addonAfter={'USD/Month'} />
      </Form.Item>
      <Form.Item label="Additional details" name="details" >
        <Input.TextArea size='large' rows={5} placeholder='write in detail your inspiration, poc, tools/cloud you use or website links?' ></Input.TextArea>
      </Form.Item>
      <Form.Item label="Submit">
        <Button type="primary" htmlType="submit"> Submit </Button>
      </Form.Item>
    </Form>  
    
    )
  }

export default function PersonalInfo() {

    const { Content, Header, Footer, Sider } = Layout;
    const [exp, setExp] = useState("Years");
    const [flag, setFlag] = useState("Home");
    const start = new Date(2012, 6, 1);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const [collapsed, setCollapsed] = useState(false);
    const [formopen, setFormOpen] = useState(false);
    const [footer,setFooter] = useState("");
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const expmap = {
        "Weeks": Math.ceil(diffDays / 7),
        "Months": Math.ceil(diffDays / 30),
        "Years": Number(diffDays / 365).toFixed(1)
    }

    const ulStyle = { display: 'inline-grid', gap: '10px', font: '' };

    const percStyle = (v) => {
        return {
            height: '25px',
            border: '2px solid green',
            borderImage: `linear-gradient(to right, green ${v * 20}%, orange ${100 - v * 20}%)`,
            borderImageSlice: 1,
            //background: `linear-gradient(to right, green ${v*20}%, white ${100-v*20}%)`,
            marginTop: '2px',
            //textDecoration: 'underline'
        }
    }


    const skills = {
        "Python & FastAPI": 4.5,
        "MySQL & MongoDB": 4,
        "Pandas & Data Visualisation": 4,
        "Javascript & (ReactJS, Next JS)": 3.75,
        "S3, SES API, Open Stack, Google Firebase": 3.5,
        "Devops, Queues & Caching": 3
    }

    useEffect(() => {
        let host = window.location.hostname;
        if(host.includes("polyglotllc")){
            setFooter("llc");
        }else{
            setFooter("personal");
        }
    }, []);

    const personalHeader = () => {
        return  <PageHeader
    ghost={true}
    title="Venu Mallik Bellamkonda"
    subTitle={"Senior engineer"}
    extra={[
        <Button key="4" onClick={() => setFlag('Home')}> 
                <HomeOutlined style={{ 'color': flag == 'Home' ? "red" : "" }}   ></HomeOutlined> </Button>,
        <Button key="2" onClick={() => setFlag('Activity')}> 
                <FileTextOutlined style={{ 'color': flag == 'Activity' ? "red" : "" }}></FileTextOutlined>   </Button>,
        <Button key="1" onClick={() => setFlag('Certifications')}>
                 <ReadOutlined style={{ 'color': flag == 'Certifications' ? "red" : "" }} ></ReadOutlined>
        </Button>,           
    ]}
    footer={[<Descriptions.Item label="Email">
        {<> <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vThYVw4vJTXaXUZjzHjhkqfwiNEhnM9x72HCmhqjk53Hz77RIGIO70Z4S-iVyLFtzmer5Yzyt7c6t9U/pub" > Resume </a> |
            <a href="mailto: venu.mallik@gmail.com" > venu.mallik@gmail.com </a> 
            | <a target="_blank" href={"https://www.github.com/venu-mallik"} > <GithubOutlined  /> </a>
            {/* <a target="_blank" href={"https://www.linkedin.com/in/venumallik"} > <LinkedinOutlined /> </a> */}
            | <a target="_blank" href="https://venu-mallik.github.io"> Data engineering blog </a>
            | <a target="blank" href="https://climate.pages.dev"> Data Visualisation </a> 
            | <Button onClick={()=> setFormOpen(true)}>Submit feedback</Button>
                <Drawer title="Multi Purpose Form" size='large'
                    onClose={()=> setFormOpen(false)} open={formopen}>
                <MyForm/>
            </Drawer>
        </>}</Descriptions.Item>
    ]}
></PageHeader> };


const llcHeader = () => {
    return  <PageHeader
ghost={true}
title="Polyglot Programmer llc"
subTitle={"Founder: Venu Mallik"}
extra={[
    <Button key="4" onClick={() => setFlag('Home')}> 
            <HomeOutlined style={{ 'color': flag == 'Home' ? "red" : "" }}   ></HomeOutlined> </Button>,
    <Button key="2" onClick={() => setFlag('Activity')}> 
            <FileTextOutlined style={{ 'color': flag == 'Activity' ? "red" : "" }}></FileTextOutlined>   </Button>,
    <Button key="1" onClick={() => setFlag('Certifications')}>
             <ReadOutlined style={{ 'color': flag == 'Certifications' ? "red" : "" }} ></ReadOutlined>
    </Button>,           
]}
footer={[<Descriptions.Item label="Email">
    {<> 
        <a target="_blank" href="https://venu-mallik.github.io"> Data Engineering blog </a>
        | <a target="blank" href="https://climate.pages.dev"> Data Visualisation </a> 
        | <Button onClick={()=> setFormOpen(true)}>Request quote</Button>
            <Drawer title="Multi Purpose Form" size='large'
              onClose={()=> setFormOpen(false)} open={formopen}>
              <MyForm/>
            </Drawer>
    </>}</Descriptions.Item>
]}
></PageHeader> };




    return (
        <>
        <Layout >
            {footer == "personal" && personalHeader()}
            {footer == "llc" && llcHeader()}
            <Content style={{ backgroundColor: 'white' }}>
                {
                    flag === 'Home' &&
                    <Card>
                        <Card.Meta title={`Experience ${expmap['Years']}`} avatar={<HistoryOutlined />}
                            className=""
                            description={<div>
                                <li>Bachelors in Information technology(4 years) and 8 years of professional experience.</li>
                                <li>Certified in Java, SQL, uses python, JavaScript daily and java as per need.</li>
                                <li>Have Industry experience in full stack, data engineering roles using aws, azure clouds.</li>
                                <li>Clients:  DATASTAX, ENERGY EXEMPLAR, USAA.  </li>
                                <li>Lead fullstack developer at Start up: IBEE Software solutions.</li>
                                <br></br>
                            </div>}>
                        </Card.Meta>
                        <Card.Meta title="Data engineering (5+)" avatar={<DatabaseOutlined />}
                            description={<div>
                                <li>Schema validation, ETL, ELT, OLAP, OLTP, wrangling & visualisation</li>
                                <li>&#9733;&#9733;&#9733;&#9733;&#9733;  Python, Pandas, SQL. </li>
                                <li>&#9733;&#9733;&#9733;&#9733;  Vega-lite, Plotly, matplotlib.</li>
                                <li>&#9733;&#9733;&#9733; Cassandra, Spark, Databricks, MongoDB and Big query.</li>
                                <br></br>
                            </div>}>
                        </Card.Meta>
                        <Card.Meta title="Full stack (5+)" avatar={<ApiOutlined />}
                            description={<div>
                                <li>&#9733;&#9733;&#9733;&#9733; API schema, OpenAPI, json schema, oauth2, RestAPI </li>
                                <li>&#9733;&#9733;&#9733;&#9733; FastAPI ,NextJS, Twisted, Java, Cloudflare (pages & workers), queues and caching.</li>
                                <li>&#9733;&#9733;&#9733; S3/SES/SQS/AWS transcoder, Resumable uploads, Streaming, Firebase, Analytics, Ant design etc </li>
                                <li>Third party integrations like payment gateways, auth libs, analytics, promotions and ads </li>
                                <br></br>
                            </div>}>
                        </Card.Meta>
                        <Divider orientation="left"  >Domain Experience</Divider>
                            <div className="timeline_container">
                                <Timeline  mode={'left'} 
                                    items={[
                                    {
                                        label: '',
                                        children: <Collapse >
                                         <Collapse.Panel header="OpsCenter (1 year): Senior engineer @ Datastax. Payroll - Innominds" key="1">
                                            <li>Successfully migrated the legacy Cassandra Java driver (1.x) to the latest 4.x version across multiple modules
                                                within the OpsCenter - Cassandra cluster management portal.</li>
                                            <li>Work on L3 jira tickets i.e feature improvements and bug fixes </li>
                                            <li> Working on Jython twisted and Java, Clojure , Javascript and Cassandra.</li>
                                            <li>Upgrading cassandra java driver form 1.x to 4.x in multiple modules.</li>
                                            <li>Code review, process improvements, unit, integration and automated functional tests.</li>
                                         </Collapse.Panel>
                                        </Collapse> 
                                    },
                                    {
                                        label: '',
                                        children: <Collapse >
                                        <Collapse.Panel header='Plexos (1 year): Senior engineer @ Energy exemplar. . Payroll - Innominds' key="1">
                                        <li>Automation and Optimization: Streamlined the European Resource Adequacy Assessment (ERAA) automation process by converting guidelines
                                            into efficient Python scripts utilizing pandas, pydantic, and Plexos enums for automatic schema generation.</li>
                                        <li>Lead the Code reviews and optimisation, reduced codebase from 10000 lines to 2000 lines of code and saved 45 minutes execution time.</li>
                                        <li> The total execution time is brought down from 2 Hours to 1 Hour 10 Minutes .</li>
                                        <li>Reverse engineered Schema from C# enums of prop tool to reduce the steep adoption curve and save time for all stake holders.</li>
                                        <li>100+ Pydantic classes with 1500+ memberships and 4000+ properties are auto generated using Json Schema and Enums.</li>
                                        </Collapse.Panel>
                                       </Collapse> 
                                    },
                                    {
                                        label: '',
                                        children: 
                                        <Collapse >
                                        <Collapse.Panel header='Entertainment- Netflix like OTT (2 years): Lead Senior engineer @ ibeehosting.com' key="1">
                                        <li>  of <a href="https://minipix.in" target="_blank" >NextJS OTT website </a> consuming
                                            <a href="https://minipix-api.ibee.ai/docs" target="_blank" > FastAPI </a> in a team of 5 at IBEE software solutions from 2021 to 2022.</li>
                                        <li> other members include Manager, Video engineer, Desinger and Android developer </li>
                                        <li>Built resumable uploads, payment gateways integrations, analytic reports and Shaka player integration </li>
                                        <li>Worked on other projects like Bare metal cloud automation, Meander(Vimeo clone) etc</li>
                                       </Collapse.Panel>
                                       </Collapse> 
                                    },
                                    {
                                        label: '',
                                        children: 
                                        <Collapse >
                                        <Collapse.Panel header='Finance (2 years) Timeseries and data analysis: Python engineer' key="1">
                                            <li> <a href="https://github.com/venu-mallik/astrodata">Part of project at github</a></li>
                                        </Collapse.Panel>
                                       </Collapse> 
                                    },
                                    {
                                        label: '',
                                        children: 
                                        
                                        <Collapse >
                                        <Collapse.Panel header='Insurance (2 years): Systems engineer @ USAA, Payroll - TCS' key="1">
                                            <li>The project is to reverse engineer 500+ screens of progress 4GL into Java wicket screens</li>
                                            <li> The database is migrated from optim to oracle</li>
                                            <li>Lead a team in query optimisation, reducing the redundant joins & sub queries.</li>
                                            <li>Support Service Now and Archibus integration and migrations.</li>
                                        </Collapse.Panel>
                                       </Collapse> 
                                    }
                                    ]}
                                />
                        </div>
                    </Card>}
                 {
                    flag === 'Activity' &&
                    <Card>
                        <Divider orientation="left">Backend</Divider>
                        <li> Better understanding of Open API & JSON Schema for models.</li><li>
                            Have production scale experience using FastAPI in Python, Jax RS in Java and
                            hands on experience using express framework in Javascript. </li><li>
                            Oauth2 authentication & experience implementing RBAC, ACL, ABAC authorisation layers. <br></br></li><li>
                            Integrating with third party libraries like Payment gateways, google firebase, cloudflare logs,
                            resumable or s3 upload protocols for own data storage etc. <br></br></li>
                        <li>
                            Production experience in using Oracle, MySQL and MongoDB in building Rest APIs. </li><li>
                            Extracting Reports from google analytics using BigQuery. <br></br></li>
                        <li>Advanced Pandas developer including Window function, Pivot, Melt, MultiIndex etc</li>
                        <li> Data visualisation using Vega-lite, Matplotlib, Leaflet js, Bokeh etc </li>

                        <Divider orientation="left">Frontend</Divider>

                        <li> Production ready Content management systems using React Hooks & Antd framework. <br></br></li>
                        <li>
                            Production ready end user websites using ReactJS , NextJS libraries. <br></br></li>
                        <li>
                            Hands on experience in using libraries like Shaka player & Shaka streamer, Uppy,
                            google firebase, google charts, Vega-lite charts etc. <br></br></li>
                        <li>
                            Experience in Integrating user facing elements with backend api i.e
                            particularly owning a feature in all layer and converting design to production.</li>

                        <Divider orientation="left">Cloud</Divider>
                        <li>Experience in using S3 API , Open Stack Upload API, google buckets etc. <br></br></li><li>
                            Experience using Azure devops for CI/CD and task tracking. <br></br></li><li>
                            Experience using cloudflare videos & cloudflare images
                            api for serving at scale. <br></br></li><li>
                            Hands on experience using in house repos i.e onedev, cloudflare pages,
                            google scripts, deploying to Virtual machines in google, pythonanywhere etc. <br></br></li><li>
                            Hands on experience using docker to spin up Minio s3, Redis, RabbitMQ and other services for development.</li>
                    </Card>
                }
                {
                    flag === 'Certifications' &&
                    <>
                        <Card>
                            <Divider orientation="left" >Learning & Certifications</Divider>
                            {
                                ["IZO-851.png", "IZO-897.png", "sql.png", "databricks.jpg", "hadoop.png"].map((x, i) => {
                                    return <object width="240" height="240" data={`/${x}`} name={x}> </object>
                                })}
                            <li><a href="https://www.hackerrank.com/venumallik" target="_blank">Hacker Rank Python, Javascript and SQL.</a>
                            </li>
                            <li><a href="https://learn.microsoft.com/en-US/users/venumallikbellamkonda-3675/transcript/dlgo1hnq9j0x9zw" target="_blank">Innominds Microsoft Learning - 2022</a>
                            </li>
                            <li><a href="/IZO-851.png" target="_blank">Java Standard Edition 6 Programmer Certified Professional</a>
                            </li>

                            <li><a href="/IZO-897.png" target="_blank">Java Platform, Enterprise Edition 6 Web Services Developer Certified Expert Exam</a>
                            </li>
                            <li><a href="/hadoop.png" target="_blank">Hadoop Training - 2015</a>
                            </li>
                            <li>B.Tech / Information Technology:2016 - 86% </li>
                            <li>12th / Plus 2 : 2011  - 83%</li>
                            <li>10th Class/SSC : 2009 - 86%</li>

                            <Divider orientation="left" >Portifolio</Divider>

                            <li> <a href="https://climate.pages.dev" target="_blank" >Cities, Climate and invisible impacts on health W.I.P</a>
                            </li>
                            <li>
                                Free lance data engineering project using pandas and advanced <a href="https://github.com/venu-mallik/Astrodata">Timeseries Analysis</a>
                            </li>
                            <li>Samples built in tasks <a href="https://github.com/venu-mallik/lambda-s3-dynamo" target="_blank">Aws lambda Sample</a> ,
                                <a href="https://github.com/venu-mallik/Auth0_Fastapi" target="_blank">FastAPI with Auth0</a> ,
                                <a href="https://github.com/venu-mallik/Fastapi-sample-with-redis" target="_blank">FastAPI with redis</a>
                            </li>

                            <Divider orientation="left" >Experience</Divider>
                            <li> Remote Senior software engineer at Innominds software pvt ltd : July 2022 - Present  </li>
                            <li> Remote Senior engineer at IBEE software solutions pvt ltd : Jan 2021 - July 2022</li>
                            <li> Python Developer at <a href="https://www.linkedin.com/company/kremlin-tech-ventures/about/" target="_blank"> Kremlin Tech </a> for two months, a affiliate of IBEE software solutions</li>
                            <li> Freelance Developer : 2018 August to  2020 August </li>
                            <li> Remote Python developer at <a href="https://www.linkedin.com/company/insisiv-labs/?originalSubdomain=in" target="_blank"> Insisiv labs </a> : 2018 June to 2018 August</li>
                            <li>Tata Consultancy services - Selected via codevita, served from 2016 August to 2018 May</li>

                        </Card>
                        <Divider orientation="left">Skills</Divider>
                        <Descriptions size="small" layout="horizontal" column={{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }} >
                            {Object.entries(skills).map(([k, v], i) => {

                                return <Descriptions.Item label={k} key={i}>
                                    <Progress type="circle" percent={v * 20} size={30} />
                                </Descriptions.Item>

                            })}
                        </Descriptions>
                    </>
                }

                {flag !== "Reading" &&
                <Card title="Skills">

                    <li> <a target="_blank" href="/stack.png">Popular libraries</a> shows comparision of adoption across FastAPI, Django, Flask, Expressjs, NextJS, AntD.
                    </li>
                    <li>Confident, can jump start a project using cookiecutter or start templates and move project from wireframes to POC to beta in record time.</li>

                    {/* <img width="50" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png" alt="Flask" title="Flask" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" alt="Java" title="Java" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/184357834-eba1eee1-6074-4b9c-8ed3-5373868096cc.png" alt="Apache Spark" title="Apache Spark" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/183893668-d45b89f9-bd9f-4143-b61a-7db9ac6bbd5e.png" alt="Cassandra" title="Cassandra" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/197845567-86a09ca9-d96f-42c4-9ab1-8bce95ab000d.png" alt="Databricks" title="Databricks" />
                    <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/ef235485-5e32-4d25-8c49-5dbe77e50f3e" alt="Hive" title="Hive" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MySQL" title="MySQL" />
                    <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/3c698a4f-84e4-4849-a900-476b14311634" alt="MariaDB" title="MariaDB" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/190887795-99cb0921-e57f-430b-a111-e165deedaa36.png" alt="Ant Design" title="Ant Design" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express" />
                    <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js" />
                    <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/50342602-8025-4030-b492-550f2eaa4073" alt="RabbitMQ" title="RabbitMQ" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png" alt="Firebase" title="Firebase" />
                    <img width="50" src="https://cdn.brighttalk.com/ams/california/images/channel/19357/image_840418.png" alt="Auth0" title="Auth0" />
                    <img width="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" /> */}
                </Card> }


            { footer === 'personal' &&
               <><Divider orientation="left">Contact</Divider>
                <Descriptions layout="horizontal" size="small" column={{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
                    <Descriptions.Item label="Name">Venu Mallik Bellamkonda</Descriptions.Item>
                    <Descriptions.Item label="Email">venu.mallik@gmail.com  &nbsp;&nbsp;&nbsp; <div id="sntlNumDisplay"></div></Descriptions.Item>
                    <Descriptions.Item label="Links"><a target="_blank" href={"https://www.github.com/venu-mallik"} > Github </a>,&nbsp;<a target="_blank" href={"https://www.linkedin.com/in/venumallik"} >Linkedin</a>, &nbsp;<a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vRYWPmGjM90SLMVlSbc0TgisJ4ww4EsjEg9DESVEwUU9kCOl4_e6t3fgs7c7F7zIVdJn1uEVvG-8W41/pub?embedded=true" > Resume </a></Descriptions.Item>
                    <Descriptions.Item label="Education">Information technology 2012-16 </Descriptions.Item>
                    <Descriptions.Item label="Edu & Exp in experience">
                        {expmap[exp]} &nbsp;&nbsp;<Segmented options={['Weeks', 'Months', 'Years']} size="small" value={exp} onChange={(v) => setExp(v)} >
                        </Segmented>  </Descriptions.Item>
                </Descriptions> 
                </>}
            </Content>
        </Layout>
            </>
    )
}