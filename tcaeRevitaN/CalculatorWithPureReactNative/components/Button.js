import React from 'react'
import {   StyleSheet, TouchableOpacity,Text} from 'react-native'

export default function Button(props) {
  return (
     
    <TouchableOpacity style={style.container}  onPress={()=>props.onChange(props.value)} >
        <Text style={style.text1}>{props.value}</Text>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    flexBasis:60,
    alignContent:'center',
    justifyContent:'center',
    borderWidth:2,
    borderRadius:12,
    backgroundColor:'grey',
    height:60,
   
     margin:15,
     shadowColor: "green",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 1,
shadowRadius: 16.00,

elevation: 24,
    
    
   
  },
  text1:{
   
    fontSize:30,
    fontWeight:'bold'
   
  }

})
