import { View, Text, Image, TouchableOpacity ,Linking, StyleSheet, TouchableHighlight} from 'react-native'
import React from 'react'


export default function (props) {
    // let formatted = new Date(props.publishedAt).toGMTString();
    // let curentDate=new Date();
    // let diff=(curentDate.getTime()-formatted.getTime())/(1000*60);
    if(props.urlToImage==null)
    props.urlToImage= 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80'
    
  return (
   <View style={style.container}>
     <Image style={style.img} resizeMode='contain'   source={{uri:(props.urlToImage===null?"https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80":props.urlToImage)}}/>
    
    <Text style={{fontWeight:'bold',fontSize:20,borderTopWidth:0.2,borderRadius:10,color:"black"}}>{props.title}</Text>
    <View style={style.container1}> 
    <TouchableOpacity onPress={()=>Linking.openURL(props.url)}><Text style={{fontWeight:'bold',color:'rgb(77, 85, 249)'}}>Read More</Text></TouchableOpacity>
    <Text style={{fontWeight:'bold'}}>{props.publishedAt}</Text>
    </View>

   </View>
  )
}

const style=StyleSheet.create({
  container:{
   flex:1,
   justifyContent:'space-around',
    
   padding:5,
   borderWidth:1,
   backgroundColor:'white',
   borderRadius:10,
   borderColor:"rgb(222, 237, 249)",
   margin:8,
    
  },
  container1:{
   flex:1,
   flexDirection:'row',
   justifyContent:'space-between',
   marginTop:12,
   borderTopWidth:0.2,
   borderRadius:10
  },
  img:{
    width: 380, height: 300 , 
    borderRadius:10,
    marginBottom:8
    
  }
})