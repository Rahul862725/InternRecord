import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import Button from './Button'

export default function Board( props) {
  console.log(props)
  const arr =["AC", "+/-","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0","00",".","="]
  return (
    <View style={style.border}>
       <Text style={style.text}>  {props.value} </Text>
       <View style={style.container}>
       {
        arr.map((el)=> {return (
            <Button key={el} value={el} onChange={props.onChange}/>)}
        )
       }
       </View>
    </View>
  )
}
const style=StyleSheet.create( {
  border:{
    flex:14,
    justifyContent:'center',
    alignContent:'center'
  },
  container:{
    flex:4,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    // backgroundColor:"green",
    flexWrap:'wrap'
  },
  text:{
    flex:1,
     borderStyle:"solid",
     borderColor:"black",
    borderBottomWidth:2,
     marginBottom:10,
      fontSize:20,
      
  }
})


//  <View >




//</view>