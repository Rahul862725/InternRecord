import { View, Text ,StyleSheet,Linking} from 'react-native'
import React from 'react'

export default function Navbar() {
  return (
    <View style={style.container}>
       <Text style={style.text} onPress={() => Linking.openURL('http://google.com')}>Home</Text>
       <Text style={style.text} onPress={() => Linking.openURL('http://google.com')}>Signup</Text>
       <Text style={style.text} onPress={() => Linking.openURL('http://google.com')}>Login</Text>
    </View>
  )
}
const style=StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'grey',
      marginTop:35
    },
    text:{
        marginLeft:20,
        marginTop:5,
        fontSize:20,
        color:'white'
    }
})