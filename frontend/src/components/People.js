import React from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from './image/Banner.jpg';
import { MDBCol } from 'mdb-react-ui-kit';

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
            <NavLink exact to="/members" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Dr. Puneet Gupta</CDBSidebarMenuItem>
            </NavLink>
            <NavLink navigate to="/members" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">PhD Members</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">MTech Members</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">MSc Members</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Alumni Members</CDBSidebarMenuItem>
            </NavLink>
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
      <div style={{height: '100vh'}}>
      <hr style={{width: "10rem", display:"inline-flex"}}></hr>
      {/* <br/> */}
      
      <h1 style={{ display:"inline-flex", margin:"0.5rem"}}> Professor </h1>
      {/* <hr style={{width: "56rem", display:"inline-flex"}}></hr> */}
        {/* <br/> */}
        {/* <br/> */}
        {/* <br/> */}
      {
        data?.map((item,key)=>(
          <>
            <React.Fragment key={key}>
            <div className="d-flex align-items-start " style={{ height: '100px', padding: '2em' }}>
              {/* <MDBCol style={{width: "10rem"}}> */}
                <img
                  src={item.image}
                  alt="Member Image"
                  style={{marginRight:"2rem"}}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              {/* </MDBCol> */}
              <MDBCol>
                <h2>{item.Name}</h2>
                {item.AcademicProgram}, {item.Department}<br/><br/>
                {item.bio}<br/><br/>
                Education-<br/>{item.education}
                <br/><br/>
                Research Interests-<br/>{item.research_interest}
                <br/><br/>
                Achievements-<br/>{item.achievements}
                <br/><br/>
                Contact-<br/>{item.contact}
              </MDBCol>
              {/* <MDBCol>One of three columns</MDBCol> */}
            </div>
          </React.Fragment>
          </>
        ))
      }
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* <div style={{ display: 'flex', width: '100%', height: '100%', padding: '2em', alignItems: 'center' }}>
        <div style={{ flex: 1, paddingRight: '1em' }}>PHD</div>
        <div style={{ flex: 1 }}>
          <hr style={{ height: '1px', backgroundColor: 'black', margin: '0', border: 'none' }} />
        </div>
      </div> */}
    </div>      
    </div>
  )
}

export default People
