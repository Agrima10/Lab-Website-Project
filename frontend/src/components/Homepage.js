import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBCol } from 'mdb-react-ui-kit';
import backgroundImage from './image/Banner.jpg';
import './Homepage.css';

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
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/professor/', {
        headers: {
          'Content-Type': 'application/json',
          // sana
          // Authorization: 'Token 311267cd55dd503028063abcf2ca1c96ad877fc7', 
          //agrima
          Authorization: 'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291', 
        },
      })
      .then((response) => setData(response.data))
      .catch((error) => setIsError(true));
  }, []);

  return (
    <div>
      <div style={divStyle}>Lab Name</div>
      {data.length > 0 && data.map((item, key) => (
          <React.Fragment key={key}>
            <div className="d-flex align-items-start bg-light mb-3" style={{ height: '100px', padding: '2em' }}>
              <MDBCol>
                <img
                  src={item.image}
                  alt="Lab Image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </MDBCol>
              <MDBCol>One of three columns</MDBCol>
              <MDBCol>One of three columns</MDBCol>
            </div>
            <div>
              <h1>{item.Name}</h1>
            </div>
          </React.Fragment>
        ))}
      {isError && <div>Sorry, there was an error loading the data.</div>}
    </div>
  );
}

export default Homepage;
