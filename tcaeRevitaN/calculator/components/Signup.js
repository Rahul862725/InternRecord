import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import axios from 'axios'
import {   useNavigate } from 'react-router';

export default function Signup() {
    const url = "http://127.0.0.1:3000/signup"
    const naviagte=useNavigate();
    const [status, setStatus] = useState("");
    const [data,setData]=useState({
        Name:"",
        Email:"",
        Password:""
    })
   
    const onChangeText = (key, val) => {
         const newData={...data}
         newData[key]=val,
         setData(newData)
      }

      const signUp=(e)=>{
        e.preventDefault();
        axios.post(url, {
            Name: data.Name,
            Email: data.Email,
            Password: data.Password
        }).then(res => {
            console.log(res)
            if(res.data==2)
            {
                setStatus("Already Registered!")
            }
            else if(res.data){
                setStatus("")
            naviagte('/login')
            }
            else
            setStatus("Internal Server Error")

        })

      }
  return (
    <View style={styles.container}>
        <Text   style={{fontWeight:"bold",marginBottom:"20px", marginTop:"20px",color:"rgb(60, 60, 232)", fontSize:"30px"}}>{status}</Text>

    <TextInput
      style={styles.input}
      placeholder='Name'
      autoCapitalize="none"
      placeholderTextColor='white'
      onChangeText={val => onChangeText('Name', val)}
    />
     
    <TextInput
      style={styles.input}
      placeholder='Email'
      autoCapitalize="none"
      placeholderTextColor='white'
      onChangeText={val => onChangeText('Email', val)}
    />
   <TextInput
      style={styles.input}
      placeholder='Password'
      secureTextEntry={true}
      autoCapitalize="none"
      placeholderTextColor='white'
      onChangeText={val => onChangeText('Password', val)}
    />
    <Button
      title='Sign Up'
      onPress={signUp}
    />
  </View>
  )
}
const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#42A5F5',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })