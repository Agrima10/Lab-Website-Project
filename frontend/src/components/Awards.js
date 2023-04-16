import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
function Awards() {

  const [data,setData]= useState();
  const [isError,setIsError]=useState();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/awards/').then((response) => setData(response.data))
    .catch((error) => setIsError(error.message));
  if (!isError) {
    setData("Not Available");
  }
  },[data])
  console.log(data);
  return (
    <div>
      {
        data?.map((item,key)=>(
          <>
          <div>
            {item.user}
            {item.AwardName}
          </div>
          </>
        ))
      }
    </div>
  )
}

export default Awards
