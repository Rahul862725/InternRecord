import { View, Text, TextInput, StyleSheet, TouchableOpacity, NativeModules,NativeEventEmitter,ScrollView, DeviceEventEmitter } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pushMessage ,setMessage} from '../Reducers/Message'
import Card from './Card'

export default function User1({ navigation }) {
    const MessageModule = NativeModules.MessageModule
    const [text, setText] = useState("")
    const messages = useSelector(state => state.message);
    const dispatch = useDispatch();

    const addMessage = () => {
        dispatch(pushMessage(text));
        setText("");
    }

    
    return (
        <View style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
        <View style={style.input}>
                <TextInput style={style.textInput}
                    placeholder='Enter Text'
                    onChangeText={setText}
                    value={text}
                    keyboardType='default'
                    onSubmitEditing={() => addMessage()}
                    > 
                    </TextInput>
            </View>
            <View style={style.message}>
                <ScrollView >
                    {
                        messages.map((el, ind) => <Card text={el} key={ind} />

                        )}

                </ScrollView>
            </View>
            
            <TouchableOpacity
                onPress={() => MessageModule.getOnAndroid(text)}
                style={style.button}
            >
                <Text style={{color:'white'}}>Move message to Kotline</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    message: {
        flex:5,
        height:80,
         
    },
    input: {
        flex:1,
        marginTop:10,
        width:"90%",
        
    },
    textInput: {
        borderRadius:10,
        borderWidth: 2
    },
    button:{
        borderWidth:2,
        padding:10,
        borderRadius:10,
        backgroundColor:'green',
        marginBottom:10,
        
    }
})