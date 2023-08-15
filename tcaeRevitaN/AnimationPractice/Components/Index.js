import { View, Text, Dimensions, Animated, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import CharText from './CharText'
 
const height=Dimensions.get('window').height
const width=Dimensions.get('window').width
export default function Index() {
    let mid=height/2;
    mid=mid-145
    const size=(new Animated.Value(0))
    const value=(new Animated.Value(0))
    const value1=(new Animated.Value(0))
    const [index,setIndex]=useState(0);
 
    Animated.sequence([
        Animated.delay(4001),
        Animated.spring(size,{
            toValue:80,
             friction:0.2,
             tension:10,
            useNativeDriver:true

        })
    ]).start()

  Animated.timing(value1,{
    toValue:1.2,
    duration:8000,
    useNativeDriver:true
  }).start()
    const renderCompoenent=()=>{
      Animated.timing(value,{
          toValue:1.4,
          duration:8000,
          useNativeDriver:true
      }).start()
      
         if(index==0)
         return <View style={style.textView}><Animated.Text style={[style.animatedText,{transform:[{rotate:value.interpolate({inputRange:[0,1.4],outputRange:["0deg","360deg"]})},{scale:value}]}]}>Best</Animated.Text></View> 
         else if(index==1)
         return <View style={style.textView}><Animated.Text style={[style.animatedText,{transform:[{rotate:value.interpolate({inputRange:[0,1.4],outputRange:["0deg","360deg"]})},{scale:value}]}]}>Young</Animated.Text></View> 
         else if(index==2)
         return <View style={style.textView}><Animated.Text  style={[style.animatedText,{transform:[{rotate:value.interpolate({inputRange:[0,1.4],outputRange:["0deg","360deg"]})},{scale:value}]}]}>Jung for</Animated.Text></View> 
         else if(index==3)
         return <View style={style.textView}><Animated.Text  style={[style.animatedText,{transform:[{rotate:value.interpolate({inputRange:[0,1.4],outputRange:["0deg","360deg"]})},{scale:value}]}]}>Universities and </Animated.Text></View> 
         else if(index==4)
         return <View style={style.textView}><Animated.Text style={[style.animatedText,{transform:[{rotate:value.interpolate({inputRange:[0,1.4],outputRange:["0deg","360deg"]})},{scale:value}]}]}>School Education </Animated.Text></View> 
    }
    const onRotate=(id)=>{
          setIndex(id)
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center' }}>
    {renderCompoenent()} 
    
    <Animated.Image  style={[style.image,{transform:[{rotate:value1.interpolate({inputRange:[0,1.2],outputRange:["0deg","360deg"]})},{scale:value1}]}]} source={require('./logo.png')}/>
    <View style={{flex:1,flexDirection:'row'}}>
          
        <CharText  text="B" id={0} inx={width} iny={-75} enx={0} eny={mid} size={8}  onRotate={(id)=>onRotate(id)}/>
        <CharText text="Y" id={1} inx={0} iny={-75} enx={0} eny={mid} size={8} onRotate={(id)=>onRotate(id)}/>
        <CharText text="J" id={2} inx={25} iny={mid} enx={-10} eny={mid} size={8} onRotate={(id)=>onRotate(id)}/>
        <CharText text="U" id={3} inx={width-145} iny={height+100} enx={0} eny={mid} size={8} onRotate={(id)=>onRotate(id)}/>
        <CharText text="S" id={4} inx={-width} iny={height} enx={0} eny={mid} size={8} onRotate={(id)=>onRotate(id)}/>
    </View>
    <View style={{flex:0.5 ,marginLeft:25,marginRight:35}}>
    <Animated.View style={{borderColor:'rgb(106, 8, 135)', borderWidth:2, height:0,width:0,
    transform:[
       {scaleX:size}
    ]
    }}></Animated.View>
    </View>
    </View>
  )
}

const style=StyleSheet.create({
  textView:{
      flex:0.25,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:20
  },
  animatedText:{
     
    fontSize:25,color:'rgb(106, 8, 135)',fontWeight:'bold', 
    paddingRight:25,
    paddingLeft:25,
    borderRadius:20,

    backgroundColor:'rgb(208, 209, 210)'
  },
  image:{
    height:10,width:200,flex:0.45,
    borderRadius:30
  }
})