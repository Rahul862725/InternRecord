import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
 

export default function NavButton(props) {
  
  
   
  return (
    <TouchableOpacity onPress={()=>props.category(props.name)}  style={[style.container,{borderBottomWidth:props.weight}]} > 
     <Text style={style.text}>{props.name}</Text>
     </TouchableOpacity>
  )
}
const style=StyleSheet.create({
  container:{
    // backgroundColor:"rgb(143, 201, 250)",
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    borderRadius:8
  },
  text:{
    paddingLeft:8,
    paddingRight:8,
    fontWeight:'bold',
    color:'black'
  }

})