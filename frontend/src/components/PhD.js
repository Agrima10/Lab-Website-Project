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
function PhD() {
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
  const [myData,setmyData]= useState([]);
  const [isError,setIsError]=useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/members',
    {headers: {
      'Content-Type':'application/json',
      // sana
      'Authorization': 'Token 311267cd55dd503028063abcf2ca1c96ad877fc7', 
      // 'Authorization':'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291'
    }}
    ).then((response) => {
        const myData = response.data.filter(item => item.AcademicProgram === 'PHD');
        console.log(myData);
        // do something with the filtered data
    })
  if (isError) {
    setmyData("Not Available");
  }
  },[])
  return (
    <div>
      {myData.AcademicProgram==="PHD"?<>phd</>:<></>}
      {/* {data.program==="PHD"?<>phd</>:<></>} */}
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
            <NavLink exact to="/" activeClassName="activeClicked">
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
      <h1 style={{ display:"inline-flex", margin:"0.5rem"}}> PhD </h1>
            {/* <p>{{ item }}</p> */}
      {
        myData?.map((item,key)=>(            
          // {% if item.AcademicProgram == 'Professor' %}
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
                {item.AcademicProgram}, {item.Department}
                <p style={{fontSize: "small"}}>{item.bio}</p>
                Education-<br/><p style={{fontSize: "small"}}>{item.education}</p>
                Research Interests-<br/><p style={{fontSize: "small"}}>{item.research_interest}</p>
                Achievements-<br/><p style={{fontSize: "small"}}>{item.achievements}</p>
                Contact-<br/><p style={{fontSize: "small"}}>{item.contact}</p>
                </MDBCol>
                {/* <MDBCol>One of three columns</MDBCol> */}
                </div>
                </React.Fragment>
                </>
          // {% endif %}
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
export default PhD

