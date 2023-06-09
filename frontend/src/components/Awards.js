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
    axios.get('http://127.0.0.1:8000/api/awards/',
    {headers: {
      'Content-Type':'application/json',
      'Authorization':'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291'
      //672875923a6a356c94a3d5db720e85af9f4aca79 
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
        Awards and Fellowships
      </div>
      <center>
        
      <div>     
      {
        data?.map((item,i)=>(
          <>
          {console.log(item.image)}
            <Card border="info" style={{ width: '20rem', margin:"1%", display:"inline-flex", height:"35rem"}}>            
              <Card.Img variant="top" src={item.image}  loading="lazy"alt="Lab Image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150';
              }}
              />           
              <Card.Body>
                <Card.Title>{item.AwardName}</Card.Title>
                <Card.Text>Awarded to {item.user}
                <br/> 
                Recieved on {item.date_started} in the Department of {item.Department}
                <br/> 
                Issued by {item.Issuing_Organization}
                <br/>
                Remarks by the organization- {item.Remark}
                </Card.Text>
              </Card.Body>
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
