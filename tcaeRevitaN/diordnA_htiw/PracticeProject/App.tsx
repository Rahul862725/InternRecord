 import { View, Text, TouchableOpacity, NativeModules, StyleSheet } from 'react-native'
 import React from 'react'
 
 export default function App() {
  const loginModule=NativeModules.LoginPage;
  
  
   return (
     <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity style={style.container} onPress={()=>loginModule.renderLogin()}>
         <Text style={{padding:10}}>PopUp Singup</Text>
        </TouchableOpacity>
     </View>
   )
 }
 const style=StyleSheet.create({
  container:{
    borderRadius:10,
    borderWidth:2,
    backgroundColor:'green'
  }
 })