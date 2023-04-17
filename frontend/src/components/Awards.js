import React from 'react'
import axios from 'axios'
import backgroundImage from './image/Banner.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState,useEffect } from 'react'
function Awards() {
  const divStyle = {
    height: '20vh',
    backgroundImage: `url(${backgroundImage})`,
    textAlign: 'center',
    padding: '5px',
    justifyContent: 'center',
    color: 'white',
    fontSize: '5em' 
  };
  const [data,setData]= useState();
  const [isError,setIsError]=useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/awards/',
    {headers: {
      'Content-Type':'application/json',
      'Authorization':'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291'
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
        Awards
      </div>
      {
        data?.map((item,key)=>(
          <>
          <div>     
            {/* <Card border="info" style={{ width: '18rem', margin:"1%"}}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.AwardName}</Card.Title>
                <Card.Text>Awarded to {item.user}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>          */}
            {/* <CardGroup> */}

            <Row xs={5} md={2} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card border="info" 
                  style={{ maxWidth:"30%", margin: "1%", display:"inline-flex"}}
                  >
                    <Card.Img variant="top" src= {item.image}/>
                    <Card.Body>
                      <Card.Title>{item.AwardName}</Card.Title>
                      <Card.Text>
                      Awarded to {item.user}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
              {/* </CardGroup> */}
          </div>
          </>
        ))
      }
    </div>
  )
}

export default Awards
