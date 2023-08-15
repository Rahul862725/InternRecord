import { View, Text, StyleSheet, Animated } from 'react-native'
import React from 'react'

export default function Card(props) {
const value=(new Animated.Value(0))
const trans=(new Animated.Value(0))
Animated.parallel([
Animated.timing(trans,{
  toValue:1.2,
  duration:2000,
  useNativeDriver:true
}),
Animated.timing(value,{
  toValue:100,
  duration:2000,
  useNativeDriver:true
})]).start()

  return (
    <Animated.View style={[style.container,{
      transform:[
        {rotate:value.interpolate( {
          inputRange:[1,100],
          outputRange:["0deg","360deg"]
        })}
        ,
        {scale:trans}
      ]
    }]}>
      <Text>{props.text}</Text>
    </Animated.View>
  )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:10,
        borderBottomEndRadius:40,
        backgroundColor:'grey',
        margin:20
    }
})