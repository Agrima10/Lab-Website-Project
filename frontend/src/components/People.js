import React from 'react'
import { useState, useEffect } from 'react'

function People() {
  const[ labmember, setLabMember]= useState([])
  useEffect(() =>{
    fetch('http://127.0.0.1:8000/api/members/',{
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 672875923a6a356c94a3d5db720e85af9f4aca79'
      }
    })
    .then(resp => resp.json())
    .then(resp => setLabMember(resp))
    .catch(error => console.log(error))
  },[])
  return (
    <div>
    {labmember.map(LabMember => {
      return <h2>{LabMember.name}</h2>
    })}
    </div>
  )
}

export default People
