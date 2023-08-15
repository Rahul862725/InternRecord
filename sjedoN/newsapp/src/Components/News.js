import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem';

export default function News(props) {
  const url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=5e8a1d044ee441e4af5afaa03c25cce7&page=${props.page}&pageSize=${props.pageSize}`
   const [newsData,setNewsData]=useState([]);
  useEffect(()=>{
    axios.get(url).then(res=>{
      console.log(res)
       setNewsData(res.data.articles);
    })

  },[])
  let mystyle={
     mergin:"40px", 
  }
  let it=0;
  return (
    <div className='container my-3'  > 
      
    <div className="row"> 

        {newsData.map((el)=>
            <div className='col-md-3 col-sm-6'>
            <NewsItem   style={mystyle} link={el.url} url={el.urlToImage} title={el.title} desc={el.description}/> 
            </div>
        )
}
        </div>
        
     
    </div>
  )
}
