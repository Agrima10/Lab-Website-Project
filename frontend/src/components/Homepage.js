import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCol,
  MDBRow,
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from './image/Banner.jpg';
import './Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Homepage() {
  const divStyle = {
    height: '20vh',
    backgroundImage: `url(${backgroundImage})`,
    textAlign: 'center',
    padding: '5px',
    justifyContent: 'center',
    color: 'white',
    fontSize: '5em',
    fontWeight: '30'
  };
  const links = [
    { label: 'Link1', url: 'https://www.iiti.ac.in/people/~puneet/' },
    { label: 'Link2', url: 'https://scholar.google.co.in/citations?user=yUB8lNsAAAAJ&hl=en' },
    { label: 'Link3', url: 'https://iiti.irins.org/profile/93769' },
  ];

  const [data1, setData1] = useState([]);
  const [isError1, setIsError1] = useState(false);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/professor/', {
        headers: {
          'Content-Type': 'application/json',
          // sana
          // Authorization: 'Token 311267cd55dd503028063abcf2ca1c96ad877fc7',
          //agrima
          Authorization: 'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291'
          //niru
          // Authorization: 'Token 672875923a6a356c94a3d5db720e85af9f4aca79', 
        },
      })
      .then((response) => setData1(response.data))
      .catch((error) => setIsError1(true));
  }, []);

  const [data2, setData2] = useState([]);
  const [isError2, setIsError2] = useState(false);
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/carousel/', {
        headers: {
          'Content-Type': 'application/json',
          // sana
          // Authorization: 'Token 311267cd55dd503028063abcf2ca1c96ad877fc7',
          //agrima
          Authorization: 'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291', 
        },
      })
      .then((response) => setData2(response.data),
        console.log(data2))
      .catch((error) => setIsError2(true));
  }, []);

  return (
    <div>
      <div style={divStyle}>Lab Name</div>
      <hr />
      {data1.map((item, key) => (
        <React.Fragment key={key}>
          <div className="d-flex">
            <div className="d-flex py-3 bg-white mb-3 mt-3 mx-auto" style={{}}>
              <MDBCol>
                <img
                  src={item.image}
                  style={{ float: "right", marginRight: "2em", height: "10em", width: "14em" }}
                  alt="Lab Image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </MDBCol>
              <MDBCol style={{ paddingLeft: "2em", paddingRight: "2em" }}>
                <h4>{item.Name}</h4>
                {item.Position}
                <br />
                Department of {item.Department}
                <br />
                Indian Institute of Technology (IIT) Indore
                <br />
                {/* {item.bio}
                <br/>               */}
              </MDBCol>
              {/* <div style={{borderRight: '1px solid #ccc'}}></div> */}
              <MDBCol style={{ paddingLeft: "2em" }}>
              {item.research_interests.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <li>{line}</li>                          
                            </React.Fragment>
                          ))}
                </MDBCol>
              <MDBCol>.</MDBCol>
            </div>
          </div>
          {isError1 && <div>Sorry, there was an error loading the data.</div>}
          <hr />
          <div className="d-flex px-4 py-3">
            <MDBCarousel showControls>
              {
                data2?.map((item2, key2) => (
                  <>
                    <MDBCarouselItem
                      className='w-100 d-block'
                      style={{ width: "100vh" }}
                      itemId={item2.id}
                      src={item2.image}
                      alt='...'
                    />
                  </>
                ))
              }
            </MDBCarousel>

            <MDBCol style={{ paddingRight: "4" }}>
              <MDBBtn outline color="dark" floating className='mx-4 my-1' href='#!' role='button'>
                <FontAwesomeIcon icon={faFacebookF} />
              </MDBBtn>
              <MDBBtn outline color="dark" floating className='mx-4 my-1' href='#!' role='button'>
                <FontAwesomeIcon icon={faTwitter} />
              </MDBBtn>
              <MDBBtn outline color="dark" floating className='mx-4 my-1' href='#!' role='button'>
                <FontAwesomeIcon icon={faInstagram} />
              </MDBBtn>
              <MDBBtn outline color="dark" floating className='mx-4 my-1' href='#!' role='button'>
                <FontAwesomeIcon icon={faGoogle} />
              </MDBBtn>
              <MDBBtn outline color="dark" floating className='mx-4 my-1' href='#!' role='button'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </MDBBtn>
              <MDBBtn outline color="dark" floating className='mx-4 my-1' href='#!' role='button'>
                <FontAwesomeIcon icon={faGithub} />
              </MDBBtn>
            </MDBCol>

          </div>
          <div class="d-flex px-4 py-3">
            {/* <MDBCol style={{padding: "2em",width:"30em"}}> */}
            <div class="px-4" style={{ display: "inline-flex", width: "80em" }}>
              {item.bio}
            </div>
            {/* </MDBCol> */}
            <div style={{ borderRight: '1px solid #ccc' }}></div>
            <div class="px-4" style={{ width: "20%" }}>
              Quick Links 
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Homepage;
