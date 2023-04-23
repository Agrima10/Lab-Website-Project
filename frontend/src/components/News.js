import React from 'react'
import axios from 'axios'
import backgroundImage from './image/Banner.jpg';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import { useState,useEffect } from 'react'
function Awards() {
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
  const [data,setData]= useState();
  const [isError,setIsError]=useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/news/',
    {headers: {
      'Content-Type':'application/json',
      // niru
      // 'Authorization':'Token 672875923a6a356c94a3d5db720e85af9f4aca79'
      //agrima
      'Authorization': 'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291'
    }}).then((response) => setData(response.data))
    .catch((error) => setIsError(error.message));
  if (isError) {
    setData("Not Available");
  }
  },[])
  console.log(data);
  return (
    <div>
      <div style={divStyle}>
        News
      </div>
      <center>
        
      <div>     
      {
        data?.map((item,i)=>(
          <>
          {console.log(item.image)}
            <Card border="info" style={{ width: '20rem', margin:"1%", display:"inline-flex", height:"15 rem"}}>            
              <Card.Img variant="top" src={item.image}  loading="lazy"alt="Lab Image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150';
              }}
              />           
            </Card>         
          </>
        ))
      }
      </div>
      </center>
    </div>
  )
}

export default Awards





/*import React from 'react';
import backgroundImage from './image/Banner.jpg';
import image1 from './image/image1.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image3.jpg';

function News() {
  const divStyle = {
    height: '20vh',
    backgroundImage: `url(${backgroundImage})`,
    textAlign: 'center',
    padding: '5px',
    justifyContent: 'center',
    color: 'white',
    fontSize: '5em' 
  };

  const imagesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  };

  const imageStyle = {
    width: '30%',
    margin: '10px'
  };

  return (
    <div>
      <div style={divStyle}>News</div>
      <div style={imagesContainerStyle}>
        <img src={image1} style={imageStyle} alt="Image 1" />
        <img src={image2} style={imageStyle} alt="Image 2" />
        <img src={image3} style={imageStyle} alt="Image 3" />
      </div>
      <div style={imagesContainerStyle}>
        <img src={image1} style={imageStyle} alt="Image 1" />
        <img src={image2} style={imageStyle} alt="Image 2" />
        <img src={image3} style={imageStyle} alt="Image 3" />
      </div>
    </div>
  );
}

export default News;*/
