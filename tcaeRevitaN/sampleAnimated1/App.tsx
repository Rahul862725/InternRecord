import { View, Text, StyleSheet, Animated, Button, TouchableOpacity, PanResponder, NativeModules } from 'react-native'
import React, { useRef, useState } from 'react'

export default function App() {

  const Sample=NativeModules.Sample;
  // const value=   (new Animated.ValueXY({x:0,y:0})) 
  // const value1=(new Animated.ValueXY({x:0,y:0}))
  // const val1=(new Animated.Value(0))
  // console.log(value)
  // const [val,setval]=useState(10)

  // Animated.sequence([
  //    Animated.delay(2000),

  //   Animated.timing(value,{
  //     toValue:{x:-150,y:-150},
  //     duration:5000,
  //     useNativeDriver:true
  //   }) ,
  //   Animated.delay(2000),
  //   Animated.spring(value1,{
  //     toValue:{x:150,y:150},
  //     tension:120,
  //     friction:1,
  //     useNativeDriver:true
  //   }) 

  // ]).start()
  // Animated.sequence([





  //  Animated.loop(
  //   Animated.timing(value,{
  //     toValue:{x:-100,y:-100},
  //     duration:1000,
  //     useNativeDriver:true
  //   }),
  //   {
  //     iterations:10
  //   }
  // ).start()


  
// ]).start()
   
  // const iw=()=>{
  //   console.log("Come")
  //     setval(200)
  // }
  // const pan=(
  //   PanResponder.create({
  //   onStartShouldSetPanResponder:()=>true,
  //   onPanResponderMove: Animated.event([
  //     null,
  //     {
  //       dx:value.x,
  //       dy:value.y
        
  //     }
      
  //   ]),
    
  // }))

  return (
    <View><Text>hello taya</Text>
    <TouchableOpacity
    onPress={()=>Sample.createCalendarEvent(" hello word!",10000)}>
   <Text>Click bacho</Text>
    </TouchableOpacity>
    </View>
    // <View style={style.container}>
    //    <Animated.View
    //    style={{
    //     width:50,
    //     height:50,
         
    //     backgroundColor:'green',
        
    //     transform:[
           
    //         {translateX:value.x},
    //         {translateY:value.y},
    //         // {cle
    //         //   rotate: value.x.interpolate({
    //         //     inputRange:[0,1],
    //         //     outputRange:['0deg','360deg']
    //         //   })
    //         // }
           
    //     ]
    //    }}

    //    {...pan.panHandlers}
    //    >
         
        
    //    {/* <TouchableOpacity onPress={iw}><Text>Press1</Text></TouchableOpacity> */}

    //    </Animated.View>
    //    <Animated.View
    //    style={{
    //     width:50,
    //     height:50,
         
    //     backgroundColor:'green',
    //     transform:[
           
    //         {translateX:value.x},
    //         {translateY:value.y},
    //         // {
    //         //   // rotate: value.x.interpolate({
    //         //   //   inputRange:[0,10],
    //         //   //   outputRange:['0deg','360deg']
    //         //   // })
    //         // },
    //         // {scaleX:value.x},
    //         // {scaleY:value.y}
           
    //     ]
    //    }}
    //    {...pan.panHandlers}
    //    ></Animated.View>
       
    // </View>
  )
}

// const style=StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }
// })


// 5
// 5*0.5 ==> 2.5

// 0      1  2 3   4  5
// 0          360

//   ---> x 0 10

