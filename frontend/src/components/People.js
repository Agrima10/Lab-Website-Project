import React from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from './image/Banner.jpg';
import { MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react'
function People() {
  const divStyle = {
    height: '20vh',
    backgroundImage: `url(${backgroundImage})`,
    textAlign: 'center',
    padding: '5px',
    justifyContent: 'center',
    color: 'white',
    fontSize: '5em',
    // fontFamily: 'Roboto',
    fontWeight: '30'
  };
  const [data,setData]= useState([]);
  const [isError,setIsError]=useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/members/',
    {headers: {
      'Content-Type':'application/json',
      // sana
      // 'Authorization': 'Token 311267cd55dd503028063abcf2ca1c96ad877fc7', 
      //agrima
      'Authorization':'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291'
    }}
    ).then((response) => setData(response.data))
    .catch((error) => setIsError(error.message));
  if (isError) {
    setData("Not Available");
  }
  },[])
  console.log(data);
  return (
    <div>
      <div style={divStyle}>
        Members
      </div>
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Quick Links
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          {/* <Link to="/members#professor"> */}
          <a href='/members#professor' smooth={true}>
                   <CDBSidebarMenuItem icon="user">Dr. Puneet Gupta</CDBSidebarMenuItem>
          </a>
          {/* </Link> */}
          <a href='/members#phd' smooth={true}>
              <CDBSidebarMenuItem icon="user">PhD Members</CDBSidebarMenuItem>
            </a>
            <a href='/members#pg' smooth={true}>
              <CDBSidebarMenuItem icon="user">PG Members</CDBSidebarMenuItem>
            </a>
            <a href='/members#ug' smooth={true}>
              <CDBSidebarMenuItem icon="user">UG Members</CDBSidebarMenuItem>
              </a>
            <a href='/members#alumni' smooth={true}>
              <CDBSidebarMenuItem icon="user">Alumni Members</CDBSidebarMenuItem>
            </a>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div style={{display:'flex', overflowY:'scroll', flexDirection:'column'}}>
        <section id='professor'>
        <h1 style={{ display:"inline", margin:"0.5rem", width:'fit-content'}} id='professor1'> Professor </h1>
        </section>
        <hr style={{width: "10rem", display:"inline"}}></hr>
        {
          data?.map((item,key)=>(            
            <>
              <React.Fragment key={item.id}>
              {item.AcademicProgram==="Professor"?
                <div>
              <br/>
                    {/* <div className="d-flex align-items-start " style={{ height: '100px', padding: '2em' }}> */}
                        <img
                          src={item.image}
                          alt="Member Image"
                          style={{marginLeft:"2rem",marginRight:"2rem", display:'inline', width:'13rem', height:'13rem'}}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/150';
                          }}
                          />
                        {/* <MDBCol> */}
                        <div style={{display:"inline"}}>
                        <h2 style={{display:'inline-flex'}}>{item.Name}</h2>
                        {item.AcademicProgram}, {item.Department}
                        <p style={{fontSize: "small"}}>{item.bio}</p>
                        Education-<br/><p style={{fontSize: "small"}}>{item.education}</p>
                        Research Interests-<br/><p style={{fontSize: "small"}}>{item.research_interest}</p>
                        Achievements-<br/><p style={{fontSize: "small"}}>{item.achievements}</p>
                        Contact-<br/><p style={{fontSize: "small"}}>{item.contact}</p>
                        </div>
                        {/* </MDBCol> */}
                        <br></br>
                        {/* </div> */}
      </div>:<></>}
      </React.Fragment>
      </>
))
}      
<section id='phd'>
<h1 style={{ display:"inline-flex", margin:"0.5rem"}} id='phd'> PhD </h1>
</section>
<hr style={{width: "10rem", display:"inline-flex"}}></hr>
        {
          data?.map((item,key)=>(            
            <>
              <React.Fragment key={item.id}>
              {item.AcademicProgram==="PHD"?
                <div>
              {/* <h1 style={{ display:"inline-flex", margin:"0.5rem"}} id='professor'> Professor </h1> */}
              {/* <hr style={{width: "10rem", display:"inline-flex"}}></hr> */}
              <br/>
                    {/* <div className="d-flex align-items-start " style={{ height: '100px', padding: '2em' }}> */}
                        <img
                          src={item.image}
                          alt="Member Image"
                          style={{marginLeft:"2rem",marginRight:"2rem", display:'inline', width:'13rem', height:'13rem'}}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/150';
                          }}
                          />
                        {/* <MDBCol> */}
                        <div style={{display:"inline"}}>
                        <h2 style={{display:'inline-flex'}}>{item.Name}</h2>
                        {item.AcademicProgram}, {item.Department}
                        <p style={{fontSize: "small"}}>{item.bio}</p>
                        Education-<br/><p style={{fontSize: "small"}}>{item.education}</p>
                        Research Interests-<br/><p style={{fontSize: "small"}}>{item.research_interest}</p>
                        Achievements-<br/><p style={{fontSize: "small"}}>{item.achievements}</p>
                        Contact-<br/><p style={{fontSize: "small"}}>{item.contact}</p>
                        </div>
                        {/* </MDBCol> */}
                        <br></br>
                        {/* </div> */}
      </div>:<></>}
      </React.Fragment>
      </>
))
}      
<section id='pg'>
<h1 style={{ display:"inline-flex", margin:"0.5rem"}} id='pg'> PG Members </h1>
</section>
        <hr style={{width: "10rem", display:"inline-flex"}}></hr>
        {
          data?.map((item,key)=>(            
            <>
              <React.Fragment key={item.id}>
              {item.AcademicProgram==="PG"?
                <div>
              {/* <h1 style={{ display:"inline-flex", margin:"0.5rem"}} id='professor'> Professor </h1> */}
              {/* <hr style={{width: "10rem", display:"inline-flex"}}></hr> */}
              <br/>
                    {/* <div className="d-flex align-items-start " style={{ height: '100px', padding: '2em' }}> */}
                        <img
                          src={item.image}
                          alt="Member Image"
                          style={{marginLeft:"2rem",marginRight:"2rem", display:'inline', width:'13rem', height:'13rem'}}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/150';
                          }}
                          />
                        {/* <MDBCol> */}
                        <div style={{display:"inline"}}>
                        <h2 style={{display:'inline-flex'}}>{item.Name}</h2>
                        {item.AcademicProgram}, {item.Department}
                        <p style={{fontSize: "small"}}>{item.bio}</p>
                        Education-<br/><p style={{fontSize: "small"}}>{item.education}</p>
                        Research Interests-<br/><p style={{fontSize: "small"}}>{item.research_interest}</p>
                        Achievements-<br/><p style={{fontSize: "small"}}>{item.achievements}</p>
                        Contact-<br/><p style={{fontSize: "small"}}>{item.contact}</p>
                        </div>
                        {/* </MDBCol> */}
                        <br></br>
                        {/* </div> */}
      </div>:<></>}
      </React.Fragment>
      </>
))
}      
<section id='ug'>
<h1 style={{ display:"inline-flex", margin:"0.5rem"}} id='ug'> UG Members </h1>
</section>
        <hr style={{width: "10rem", display:"inline-flex"}}></hr>
        {
          data?.map((item,key)=>(            
            <>
              <React.Fragment key={item.id}>
              {item.AcademicProgram==="UG"?
                <div>
              {/* <h1 style={{ display:"inline-flex", margin:"0.5rem"}} id='professor'> Professor </h1> */}
              {/* <hr style={{width: "10rem", display:"inline-flex"}}></hr> */}
              <br/>
                    {/* <div className="d-flex align-items-start " style={{ height: '100px', padding: '2em' }}> */}
                        <img
                          src={item.image}
                          alt="Member Image"
                          style={{marginLeft:"2rem",marginRight:"2rem", display:'inline', width:'13rem', height:'13rem'}}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/150';
                          }}
                          />
                        {/* <MDBCol> */}
                        <div style={{display:"inline"}}>
                        <h2 style={{display:'inline-flex'}}>{item.Name}</h2>
                        {item.AcademicProgram}, {item.Department}
                        <p style={{fontSize: "small"}}>{item.bio}</p>
                        Education-<br/><p style={{fontSize: "small"}}>{item.education}</p>
                        Research Interests-<br/><p style={{fontSize: "small"}}>{item.research_interest}</p>
                        Achievements-<br/><p style={{fontSize: "small"}}>{item.achievements}</p>
                        Contact-<br/><p style={{fontSize: "small"}}>{item.contact}</p>
                        </div>
                        {/* </MDBCol> */}
                        <br></br>
                        {/* </div> */}
      </div>:<></>}
      </React.Fragment>
      </>
))
}      
<section id='alumni'>
<h1 style={{ display:"inline-flex", margin:"0.5rem"}} id='alumni'> Alumni Members </h1>
</section>
        <hr style={{width: "10rem", display:"inline-flex"}}></hr>
        {
          data?.map((item,key)=>(            
            <>
              <React.Fragment key={item.id}>
              {item.AcademicProgram==="Alumni"?
                <div>
              {/* <h1 style={{ display:"inline-flex", margin:"0.5rem"}} id='professor'> Professor </h1> */}
              {/* <hr style={{width: "10rem", display:"inline-flex"}}></hr> */}
              <br/>
                    {/* <div className="d-flex align-items-start " style={{ height: '100px', padding: '2em' }}> */}
                        <img
                          src={item.image}
                          alt="Member Image"
                          style={{marginLeft:"2rem",marginRight:"2rem", display:'inline', width:'13rem', height:'13rem'}}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/150';
                          }}
                          />
                        {/* <MDBCol> */}
                        <div style={{display:"inline"}}>
                        <h2 style={{display:'inline-flex'}}>{item.Name}</h2>
                        {item.AcademicProgram}, {item.Department}
                        <p style={{fontSize: "small"}}>{item.bio}</p>
                        Education-<br/><p style={{fontSize: "small"}}>{item.education}</p>
                        Research Interests-<br/><p style={{fontSize: "small"}}>{item.research_interest}</p>
                        Achievements-<br/><p style={{fontSize: "small"}}>{item.achievements}</p>
                        Contact-<br/><p style={{fontSize: "small"}}>{item.contact}</p>
                        </div>
                        {/* </MDBCol> */}
                        <br></br>
                        {/* </div> */}
      </div>:<></>}
      </React.Fragment>
      </>
))
}      
      </div>
    </div>      
    </div>
  )
}
export default People

