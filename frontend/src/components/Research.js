import React from 'react'
import axios from 'axios'
import backgroundImage from './image/Banner.jpg';
import {
  MDBCol,
  MDBRow,
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react'

function Research() {
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
  const [data, setData] = useState();
  const [isError, setIsError] = useState();
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/',
      {
        headers: {
          'Content-Type': 'application/json',
          // sana
          'Authorization': 'Token 311267cd55dd503028063abcf2ca1c96ad877fc7',
          //agrima
          // 'Authorization':'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291'
        }
      }).then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (isError) {
      setData("Not Available");
    }
  }, [])
  console.log(data);
  return (
    <div>
      <div style={divStyle}>
        Research
      </div>
      {
        data?.map((item, key) => (
          <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <hr style={{ width: '75%', border: '1px solid black' }} />
            </div>
            <div className="d-flex">
              <div className="d-flex bg-white mb-3 mx-auto" style={{}}>
                <div style={{ width: "60em", marginLeft: "10em" }}>
                <h3 style={{ color: '#0099ff', fontWeight: 'bold'}}>{item.title}</h3>
                  {item.description}
                  {/* <br/> */}
                  {/* Contributors:
                  <br/>
                  <ul>
                    <li>{item.members}</li>
                  </ul> */}
                </div>
                <div style={{ width: "20em" }}>
                  <img
                    src={item.image}
                    style={{ padding: "2em", width: "18em" }}
                    alt="Lab Image"
                  />
                </div>
              </div>
            </div>
          </>
        ))
      }
    </div>
  )
}

export default Research
