import { View, Text ,Animated, StyleSheet} from 'react-native'
import React, { useRef } from 'react'

export default function CharText(props) {
  
  const value= (new Animated.ValueXY({x:props.inx,y:props.iny})) 
  const size=(new Animated.Value(1))
  const size1=(new Animated.Value(props.size-10))
 
  

  Animated.sequence([
  Animated.parallel([
    Animated.timing(value,{
      toValue:{x:props.enx,y:props.eny},
      duration:5000,
      useNativeDriver:true
    }),
    Animated.timing(size,{
      toValue:props.size,
      duration:5000,
      useNativeDriver:true
    }),
     
  ]),
  Animated.spring(size1,{
    toValue:props.size,
    friction:0.2,
    tension:10,
    useNativeDriver:true
  })
]).start()
  return (
    <Animated.View
    style={{
     transform:[
      {translateX:value.x},
      {translateY:value.y}
     ],
     margin:30,
    //  borderWidth:2
     
    }
    }
    >
       <Animated.Text style={[style.textStyle,{
        transform:[
          {translateX:size1},
          {translateY:size1},
          {scale:size}
        ]
       }]} onPress={()=>props.onRotate(props.id)}>{props.text}</Animated.Text>
    </Animated.View>
  )
}

const style=StyleSheet.create({
  textStyle:{
    
    color:'rgb(106, 8, 135)',
    fontWeight:'bold'
  }
})
