import { View, Text, TouchableOpacity, StyleSheet, NativeModules, Animated , DeviceEventEmitter} from 'react-native'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { pushMessage } from '../Reducers/Message';


export default function Index({ navigation }) {
    const MessageModule = NativeModules.MessageModule;
    const value= (new Animated.Value(0)) 
    const dispatch=useDispatch();
    DeviceEventEmitter.addListener('getUp',event=>{
        console.log(event.message)
        dispatch(pushMessage(event.message))
        navigation.navigate("user1")
        
    })

    Animated.sequence([
        
    Animated.timing(value,{
        toValue:1.9,
        duration:2000,
        useNativeDriver:true
    })]).start()

    return (
        <View style={style.container}>
          <Animated.View
          style={{
             transform:[
                 {scale:value}
             ]
          }}
          >
            <TouchableOpacity style={style.button}
                onPress={() => {
                    navigation.navigate('user1')
                }}
            >
            <Text style={{padding:10,borderRadius:10}}>React Native To Kotline</Text>
            </TouchableOpacity>
            </Animated.View>
            <Animated.View
            style={{
                transform:[
                 {scale:value}
             ]
            }}
            >
            <TouchableOpacity style={style.button}
                onPress={() => {
                    MessageModule.getRender()
                    
                }
                }
            ><Text style={{padding:10,borderRadius:10}}>Kotline To React Native</Text></TouchableOpacity>
            </Animated.View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    button: {
        borderWidth: 2,
        borderRadius:10,
        backgroundColor: 'green',
        color: 'white',
        margin: 40
    }
})