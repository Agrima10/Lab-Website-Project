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
          //672875923a6a356c94a3d5db720e85af9f4aca79 niru
          Authorization: 'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291', 
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
                {/* {item.bio}
                <br/>               */}
              </MDBCol>
              {/* <div style={{borderRight: '1px solid #ccc'}}></div> */}
              <MDBCol style={{paddingLeft: "2em"}}>{item.research_interests}</MDBCol>
              <MDBCol>.</MDBCol>
            </div>
            </div>
      {isError && <div>Sorry, there was an error loading the data.</div>}
      <hr/>
      <div className="d-flex px-4 py-3">
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
      <MDBCol style={{paddingRight: "4"}}>
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
      <div class="px-4"style={{display: "inline-flex", width:"80em"}}>        
          {item.bio}
      </div>
      {/* </MDBCol> */}
      <div style={{borderRight: '1px solid #ccc'}}></div>
      <div class="px-4" style={{width: "20%"}}>
        Quick Links
        <ul>
          <li>
            Link 1
          </li>
          <li>
            Link 2
          </li>
          <li>
            Link 3
          </li>
          <li>
            Link 4
          </li>
          <li>
            Link 5
          </li>
        </ul>
        
      </div>
      </div>
      </React.Fragment>
    ))}
    </div>
  );
}

export default Homepage;
