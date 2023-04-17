import React from 'react'
import axios from 'axios'
import backgroundImage from './image/Banner.jpg';
import { useState,useEffect } from 'react'
function People() {
  const divStyle = {
    height: '20vh',
    backgroundImage: `url(${backgroundImage})`,
    textAlign: 'center',
    padding: '5px',
    justifyContent: 'center',
    color: 'white',
    fontSize: '5em' 
  };
  const [data,setData]= useState([]);
  const [isError,setIsError]=useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/members/',
    {headers: {
      'Content-Type':'application/json',
      'Authorization':'Token 7c22c44ef8744aa74d9fbb8bf3c8ad8d6b32f291'
    }}
    ).then((response) => setData(response.data))
    .catch((error) => setIsError(error.message));
  if (isError) {
    setData("Not Available");
  }
  },[])
  console.log(data);
  return (
    <div>
      <div style={divStyle}>
        People
      </div>
      {
        data?.map((item,key)=>(
          <>
          <div>
            {item.user}
            {/* {item.} */}
          </div>
          </>
        ))
      }
    </div>
  )
}

export default People
