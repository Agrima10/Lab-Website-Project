import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
 } from 'mdb-react-ui-kit';
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
  };
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/professor/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token 311267cd55dd503028063abcf2ca1c96ad877fc7',
        },
      })
      .then((response) => setData(response.data))
      .catch((error) => setIsError(true));
  }, []);

  return (
    <div>
      <div style={divStyle}>Lab Name</div>
      <hr/>
      {data.length > 0 && data.map((item, key) => (
        <React.Fragment key={key}>
            <div className="d-flex">
            <div className="d-flex py-3 bg-white mb-3 mt-3 mx-auto" style={{}}>
              <MDBCol>
                <img
                  src={item.image}
                  style={{float: "right", marginRight: "2em", height: "10em", width: "10em"}}
                  alt="Lab Image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                  />
              </MDBCol>
              <MDBCol style={{paddingLeft: "2em", paddingRight: "2em"}}>
                <h4>{item.Name}</h4>
                {item.Position}
                <br/>
                Department of {item.Department}
                <br/>
                Indian Institute of Technology (IIT) Indore
                <br/>
                {item.bio}
                <br/>              
              </MDBCol>
              {/* <div style={{borderRight: '1px solid #ccc'}}></div> */}
              <MDBCol style={{paddingLeft: "2em"}}>{item.research_interests}</MDBCol>
              <MDBCol>.</MDBCol>
            </div>
            </div>
          </React.Fragment>
        ))}
      {isError && <div>Sorry, there was an error loading the data.</div>}
      <hr/>
      <div className="d-flex">
      <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
        />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
        />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
        />
      </MDBCarousel>
      <MDBCol>
        <img
          src=""
          style={{float: "right", marginRight: "2em", height: "10em", width: "10em"}}
          alt="Lab Image"
        />
      </MDBCol>
      
      </div>
      <div class="d-flex">
      <MDBCol>
          bchjdjcbahjcasbcsbasjsbxhxbkzksaxsjbkskdbckdcbabcasbcjabscbscbshchbhjjbsjbhs
      </MDBCol>
      <MDBCol style={{backgroundColor: "Grey"}}>
        dhhbshbxsjkxnsna
      </MDBCol>
      </div>
    </div>
  );
}

export default Homepage;
