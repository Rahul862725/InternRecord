import { View, Text, ScrollView, StyleSheet, Button, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavButton from './NavButton';
import axios from 'axios';
 
import Cards from './cards';
import { pushHeading,clearHeading,updateHeading } from '../Reducers/navbarHeading';
import { setArticle } from '../Reducers/articles';


export default function Home() {
  const navArray = ["general", "business", "entertainment", "health", "science", "sports", "technology"]
  const navbarHeadings = useSelector(state => state.navCo)
  const articles = useSelector(state => state.articles)
  const [isLoad,setLoad]=useState(true)
  // const [articles,setArticle]=useState([])
  const dispatch = useDispatch();
  console.log("\n",articles.length+" ")
  
  useEffect( () => {
    
    navArray.map( (el) => {
      let obj={
        data:el,
        weight:0
      }
      dispatch(pushHeading(obj))
    })
    console.log(1)
    
  }, [])

  const onClick =  async (name) => {
    console.log(name+"name valuea")
    setLoad(true)
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${name}&apiKey=5e8a1d044ee441e4af5afaa03c25cce7`
    
    let obj1= await navbarHeadings.map(el=>(el.data==name)?({data:el.data,weight:2}):({data:el.data,weight:0}))
    dispatch(updateHeading(obj1))
      let res=await fetch(url)
      const ans=await res.json()
      console.log("\n")
      // console.log(ans.articles?.source?.name+"channel names")
      dispatch(setArticle(ans.articles) )
      setLoad(false)
      
  }

  return (
    <View style={style.navbar}>
      <View style={style.navbar}>
        <ScrollView style={style.navbarStyle} horizontal={true} >
          {
            navbarHeadings.map((el, index) => <NavButton key={index} category={(name)=>   onClick(name)} name={el.data} weight={el.weight}/>)
          }
        </ScrollView>
      </View>
      <View style={style.news}>
        <ScrollView  >
          {isLoad==true?(<View style={style.load}><ActivityIndicator/></View>):
            articles.map((el, index) => <Cards key={index + 10} url={el.url} title={el.title} publishedAt={el.publishedAt} urlToImage={el.urlToImage}   />)
          }
        </ScrollView>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  navbar: {
    flex: 1
  },
  navbarStyle: {
    borderBottomWidth:1,
    // backgroundColor: 'rgb(222, 237, 249)',
    borderColor:'rgb(58, 159, 242)'
  },
  news: {
    flex: 12,
    justifyContent: "space-around",
    
  },
  load:{
    marginTop:100,
    
  }
})