import React, { useState } from 'react'

export default function(props) {
 
   
   
  return (
      
        <div className="card" style={{width: "18rem"}}>
  <img src={props.url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <a href={props.link} className="btn btn-primary">More</a>
  </div>
</div>
    
  )
   
}
