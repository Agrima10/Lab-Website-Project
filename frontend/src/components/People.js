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
import { useState, useEffect } from 'react'
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
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState();
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/members/',
      {
        headers: {
          'Content-Type': 'application/json',
          // sana
          'Authorization': 'Token 311267cd55dd503028063abcf2ca1c96ad877fc7',
          //agrima
          // 'Authorization':'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291'
        }
      }
    ).then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (isError) {
      setData("Not Available");
    }
  }, [])
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
        <div style={{ display: 'flex', width: "100%", overflowY: 'scroll', flexDirection: 'column' }}>
          <section id='professor'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </div>
          </section>
          {
            data?.map((item, key) => (
              <>
                <React.Fragment key={key}>
                  {item.AcademicProgram === "Professor" ?
                    <div className="d-flex">
                      <div className="d-flex bg-white mb-3 mx-auto" style={{}}>
                        <div style={{ width: "20em" }}>
                          <img
                            src={item.image}
                            style={{ marginLeft: "1em", width: "18em" }}
                            alt="Lab Image"
                          />
                        </div>
                        <div style={{ width: "50em", marginLeft: "1em" }}>
                          <h3 style={{ fontWeight: 'bold' }}>{item.Name}</h3>
                          {item.Department}
                          <br />
                          {item.bio.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br/>                              
                            </React.Fragment>
                          ))}
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Education:</b>
                            </div>
                            <div style={{}}>
                            <ul>
                              {item.education.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '18%'}}>
                            <b>Research Interests:</b>
                            </div>
                            <div style={{ width: '82%'}}>
                              <ul>
                              {item.research_interest.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Achievements:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                              {item.achievements.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Contact:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                                <li>{item.email}</li>
                                <li>{item.contact}</li>
                              </ul>
                            </div>
                            </div>

                        </div>
                      </div>
                    </div>
                    : <></>}
                </React.Fragment>
              </>
            ))
          }
          <section id='phd'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </div>
            <h1 style={{ display: "inline", margin: "1rem", width: 'fit-content', display: "inline", color: '#0099ff', fontWeight: 'bold' }}> Phd Members </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </div>
          </section>
          {
            data?.map((item, key) => (
              <>
                <React.Fragment key={key}>
                  {item.AcademicProgram === "PHD" ?
                    <div className="d-flex">
                      <div className="d-flex bg-white mb-3 mx-auto" style={{}}>
                        <div style={{ width: "20em" }}>
                          <img
                            src={item.image}
                            style={{ marginLeft: "1em", width: "18em" }}
                            alt="Lab Image"
                          />
                        </div>
                        <div style={{ width: "50em", marginLeft: "1em" }}>
                          <h3 style={{ fontWeight: 'bold' }}>{item.Name}</h3>
                          Discipline of {item.Department}
                          <br />
                          {item.bio.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br/>                              
                            </React.Fragment>
                          ))}
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Education:</b>
                            </div>
                            <div style={{}}>
                            <ul>
                              {item.education.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Research Interests:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                              {item.research_interest.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Achievements:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                              {item.achievements.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Contact:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                                <li>{item.email}</li>
                                <li>{item.contact}</li>
                              </ul>
                            </div>
                            </div>

                        </div>
                      </div>
                    </div>
                    : <></>}
                </React.Fragment>
              </>
            ))
          }
          <section id='pg'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </div>
            <h1 style={{ display: "inline", margin: "1rem", width: 'fit-content', display: "inline", color: '#0099ff', fontWeight: 'bold' }}>PG Members </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </div>
          </section>
          {
            data?.map((item, key) => (
              <>
                <React.Fragment key={key}>
                  {item.AcademicProgram === "PG" ?
                    <div className="d-flex">
                      <div className="d-flex bg-white mb-3 mx-auto" style={{}}>
                        <div style={{ width: "20em" }}>
                          <img
                            src={item.image}
                            style={{ marginLeft: "1em", width: "18em" }}
                            alt="Lab Image"
                          />
                        </div>
                        <div style={{ width: "50em", marginLeft: "1em" }}>
                          <h3 style={{ fontWeight: 'bold' }}>{item.Name}</h3>
                          Discipline of {item.Department}
                          <br />
                          {item.bio.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br/>                              
                            </React.Fragment>
                          ))}
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Education:</b>
                            </div>
                            <div style={{}}>
                            <ul>
                              {item.education.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Research Interests:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                              {item.research_interest.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Achievements:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                              {item.achievements.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Contact:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                                <li>{item.email}</li>
                                <li>{item.contact}</li>
                              </ul>
                            </div>
                            </div>

                        </div>
                      </div>
                    </div>
                    : <></>}
                </React.Fragment>
              </>
            ))
          }
          <section id='ug'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </div>
            <h1 style={{ display: "inline", margin: "1rem", width: 'fit-content', display: "inline", color: '#0099ff', fontWeight: 'bold' }}> UG Members </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </div>
          </section>
          {
            data?.map((item, key) => (
              <>
                <React.Fragment key={key}>
                  {item.AcademicProgram === "UG" ?
                    <div className="d-flex">
                      <div className="d-flex bg-white mb-3 mx-auto" style={{}}>
                        <div style={{ width: "20em" }}>
                          <img
                            src={item.image}
                            style={{ marginLeft: "1em", width: "18em" }}
                            alt="Lab Image"
                          />
                        </div>
                        <div style={{ width: "50em", marginLeft: "1em" }}>
                          <h3 style={{ fontWeight: 'bold' }}>{item.Name}</h3>
                          Discipline of {item.Department}
                          <br />
                          {item.bio.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br/>                              
                            </React.Fragment>
                          ))}
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Education:</b>
                            </div>
                            <div style={{}}>
                            <ul>
                              {item.education.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Research Interests:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                              {item.research_interest.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Achievements:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                              {item.achievements.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Contact:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                                <li>{item.email}</li>
                                <li>{item.contact}</li>
                              </ul>
                            </div>
                            </div>

                        </div>
                      </div>
                    </div>
                    : <></>}
                </React.Fragment>
              </>
            ))
          }
          <section id='alumn'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </div>
            <h1 style={{ display: "inline", margin: "1rem", width: 'fit-content', display: "inline", color: '#0099ff', fontWeight: 'bold' }}> Alumni Members </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </div>
          </section>
          {
            data?.map((item, key) => (
              <>
                <React.Fragment key={key}>
                  {item.AcademicProgram === "Alumni" ?
                    <div className="d-flex">
                      <div className="d-flex bg-white mb-3 mx-auto" style={{}}>
                        <div style={{ width: "20em" }}>
                          <img
                            src={item.image}
                            style={{ marginLeft: "1em", width: "18em" }}
                            alt="Lab Image"
                          />
                        </div>
                        <div style={{ width: "50em", marginLeft: "1em" }}>
                          <h3 style={{ fontWeight: 'bold' }}>{item.Name}</h3>
                          Discipline of {item.Department}
                          <br />
                          {item.bio.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br/>                              
                            </React.Fragment>
                          ))}
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Education:</b>
                            </div>
                            <div style={{}}>
                            <ul>
                              {item.education.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Research Interests:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                              {item.research_interest.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>                              
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Achievements:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                              {item.achievements.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>
                            </React.Fragment>
                          ))}
                              </ul>
                            </div>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: '16%'}}>
                            <b>Contact:</b>
                            </div>
                            <div style={{}}>
                              <ul>
                                <li>{item.email}</li>
                                <li>{item.contact}</li>
                              </ul>
                            </div>
                            </div>

                        </div>
                      </div>
                    </div>
                    : <></>}
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

