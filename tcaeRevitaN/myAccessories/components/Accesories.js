import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import NavButton from './NavButton'
import { useDispatch, useSelector } from 'react-redux'
import { setOption } from '../Reducers/Accesories'
import Photo from './Photo'
import DharmicMusic from './DharmicMusic'
import Notes from './Notes'
import NotesForm from './NotesForm'
import PhotoForm from './PhotoForm'
import DahrmicMusicForm from './DahrmicMusicForm'
import { deleteNotesById } from '../Reducers/Notes'

export default function Accesories() {
    const option=useSelector(state=>state.options)
    const notes=useSelector(state=>state.notes)
    const dispatch=useDispatch()
    const Items=["Notes","DharmicMusic","Photos"]

    const onDelete=(id)=>{
      console.log(id)
      dispatch(deleteNotesById(id))
    }

    const onClick=(name)=>{
        if(name=='NotesForm')
        dispatch(setOption(0))
        else if(name=='Photos')
        dispatch(setOption(1))
        else if(name=='DharmicMusic')
        dispatch(setOption(2))
        else if(name=='Notes')
        dispatch(setOption(3))
        else if(name=='PhotosForm')
        dispatch(setOption(-1))
        else if(name=='DharmicMusicForm')
        dispatch(setOption(-2))
    }
    const renderComponent =()=>{
        if(option==0)
        return <NotesForm/>
        else if(option==1)
        return <Photo/>
        else if(option==2)
        return <DharmicMusic/>
        else if(option==3){
        return (
          
           notes.length==0?<Text>Empty</Text>: notes.map((el,index)=><Notes key={index} title={el.Title} content={el.Content} id={el.Id} onDelete={(id)=>onDelete(id)}/>)
           
        )
        }
        else if(option==-1)
        return <PhotoForm/>
        else if(option==-2)
        return <DahrmicMusicForm/>
        else return (<Text>Empty</Text>)

    }
    const assignName=(option)=>
    {
    return Items[3-option]
    }
  return (
    <View style={style.navbar}>
       <View style={style.navbar}>
        <ScrollView style={style.navbarStyle} horizontal={true}>
         {
            Items.map((el,index)=><NavButton key={index} name={el} onClick={(id)=>onClick(id)} weight={el==assignName(option)?2:0}/>)
         }
        </ScrollView>
       </View>
       <View style={style.items}>
       <View style={{flex:12,justifyContent:'space-around'}}> 
        <ScrollView  >
         {renderComponent()}
        </ScrollView>
        </View>
       {
         option>0&&<TouchableOpacity onPress={()=>onClick(assignName(option)+'Form')} style={style.button}>
            <Text>Add {assignName(option)}</Text>
        </TouchableOpacity>
       }
       </View>

    </View>
  )
}
const style=StyleSheet.create({
    navbar:{
        flex:1
    },
    navbarStyle: {
    borderBottomWidth:1,
    // backgroundColor: 'rgb(222, 237, 249)',
    borderColor:'rgb(58, 159, 242)'
  },
  items:{
    flex:12,
    justifyContent:'space-around'
  },
  button:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
     marginLeft:100,
     marginRight:100,
    borderWidth:2,
    borderRadius:10,
    backgroundColor:'green',
    bottom:15
  }
})