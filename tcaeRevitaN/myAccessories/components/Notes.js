import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// import { useSelector } from 'react-redux'

export default function Notes(props) {
  
  return (
    <View style={style.container}>
    <View style={style.container1}> 
       <Text style={style.title}>{props.title}</Text>
       <Text style={style.title} onPress={()=>props.onDelete(props.id)}>X</Text>
      </View>
       <Text style={style.content}>{props.content}</Text>

    </View>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    borderWidth:1,
    borderRadius:4,
    margin:10
  },
  container1:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    padding:5
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  },
  content:{
    flex:12,
    padding:5
  }
})