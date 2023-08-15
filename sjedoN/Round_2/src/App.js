import React,{useEffect, useState} from 'react'
import axios from 'axios';
const api='http://localhost:4000/linkdata';
const History = () => {
    const [links, setLinks] = useState([{abc:"cde"},{abc:"def"}])
    const getlinks=()=>{
        fetch(api, {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify({
            username: "seemant"
        }),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => {
      setLinks(json);
      console.log(json)
    });
    }
    useEffect(()=>{
         getlinks();
         console.log(links);

    },[]);
  return (
    <>
    <ul>
           {
              links.map((link) => {
                return <li >{link.abc}</li>
             })
           }
       </ul>
    </>
  )
}

export default History