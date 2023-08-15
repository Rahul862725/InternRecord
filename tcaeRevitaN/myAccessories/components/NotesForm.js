import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotes } from '../Reducers/Notes'
import { setOption } from '../Reducers/Accesories'
import { setId } from '../Reducers/Id'


export default function AccesoriesForm() {
  // const notes=useSelector(state=>state.notes)
  const dispatch=useDispatch()
  const id=useSelector(state=>state.id)
  const [tempNotes,setTempNotes]=useState({
    Id:0,
    Title:"",
    Content:""
  })
    

    
    const onChange=(id,text)=>{
     const copy={...tempNotes}
     copy[id]=text;
     setTempNotes(copy)
    }
    const sumbit= ()=>{
       const res={...tempNotes}
       res["Id"]=id;
       console.log(res)
      dispatch(setNotes(res))
      dispatch(setId(id+1))
      console.log(id+"in")
      dispatch(setOption(3))
     
    }
  return (
    <View style={style.container}>
    
      <TextInput selectable={true} style={style.input} onChangeText={(text)=>onChange('Title',text)} placeholder='Enter Title'/>
      <TextInput multiline selectable={true} style={style.input} onChangeText={(text)=>onChange('Content',text)} placeholder='Enter Content'/>
      <TouchableOpacity style={style.button} onPress={()=>sumbit()}><Text >Sumbit</Text></TouchableOpacity>
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    },
    input:{
      borderRadius:10,
      margin:25,
      marginTop:40,
      width:'80%',
      borderWidth:2,
      height:40
    },
    button:{
      backgroundColor:'green',
      borderRadius:10,
      padding:10,
      marginTop:50,
      color:'white'
    }
})