import {React,useState} from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text
} from 'react-native'
import axios from 'axios'
// import {   use} from 'react-router';

export default function Signup({navigation}) {
    const url = "http://192.168.43.74:3000/signup"
    // const naviagte=useNavigate();
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

      const Login=(e)=>{
        navigation.navigate('Login')
      }

      const signUp=async (e)=>{
        e.preventDefault();
        
        // fetch(url).then(res=>{
        //   console.log("data"+res)
        // }).catch(err=>console.log(err))
        
        // console.log(data)
        // navigation.navigate('Login')
         axios.post(url, {
            Name: data.Name,
            Email: data.Email,
            Password: data.Password
        }).then(ans=>ans.data).then(res=>{
             
             
            console.log("data is:", res  )
            if(res.data===2)
            {
                setStatus("Already Registered!")
            }
            else if(res.data===1){
                setStatus("")
                
                navigation.navigate('Login')
            }
            else
            setStatus("Internal Server Error")

        })  .catch(error => console.log(error));

      }
  return (
    <View style={styles.container}>
        <Text   style={{fontWeight:"bold",marginBottom:20, marginTop:20,color:"rgb(60, 60, 232)", fontSize:30}}>{status}</Text>

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
    <View style={styles.button}> 
    <Button
     
      title='Sign Up'
      onPress={signUp}
    />
    <Button
      title='Login'
      onPress={Login}
    />
    </View>
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
    },
    button:{
      flex:1,
      flexDirection:'row',
      marginBottom:260,
      
    }
  })