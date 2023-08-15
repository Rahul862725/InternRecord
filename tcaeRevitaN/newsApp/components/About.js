import { View, Text ,Linking,StyleSheet,ImageBackground} from 'react-native'
import React from 'react'
import image from "../bg.jpg"

export default function About() {
  return (
    <View style={style.container}>
    <ImageBackground style={style.container} source={require('../bg.jpg')} resizeMode="cover">
      <Text style={style.text}>-News App Proivde various type of top-headlines of news</Text>
      <Text style={style.text}>-Select the category in which are you intersted and see top-headlines.</Text>
      <Text style={style.text}  onPress={()=>{Linking.openURL("https://play.google.com/store/apps/details?id=com.toi.reader.activities&hl=en&gl=US")}}>-To Now more click on the text</Text>
      </ImageBackground> 
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around'
  },
  text:{
    margin:20,
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    fontSize:20,
    color:"white"
  }
})