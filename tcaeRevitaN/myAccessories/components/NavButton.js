import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function NavButton(props) {
  
    return (
    <TouchableOpacity onPress={()=>props.onClick(props.name)}  style={[style.container,{borderBottomWidth:props.weight}]} > 
     <Text style={style.text}>{props.name}</Text>
     </TouchableOpacity>
  )
}
const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    // backgroundColor:"rgb(143, 201, 250)",
    margin:10,
    borderRadius:10
  },
  text:{
    paddingLeft:8,
    paddingRight:8,
    fontWeight:'bold',
    color:'black'
  }

})