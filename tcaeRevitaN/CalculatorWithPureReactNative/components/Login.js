import {React,useState} from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import axios from 'axios'
 
 export default function Login({navigation}) {
    const url = "http://192.168.43.74:3000/login"
    // const naviagte=useNavigate();
    const [status, setStatus] = useState("");
    const [data,setData]=useState({
        Email:"",
        Password:""
    })
   
    const onChangeText = (key, val) => {
         const newData={...data}
         newData[key]=val,
         setData(newData)
      }

      const Login=async (e)=>{
        e.preventDefault();
        // navigation.navigate("Calculator")
        axios.post(url, {
          Email: data.Email,
          Password: data.Password
      }).then(ans=>ans.data).then(res => {
          console.log(res)
          if(res.data){
              setStatus("")
              navigation.navigate('Calculator')
          }
          else
          setStatus("Email or Password Incorrect!")

      })  .catch(error => console.log(error));
      

      }
  return (
    <View style={styles.container}>
    <Text   style={{fontWeight:"bold",marginBottom:20, marginTop:20,color:"rgb(60, 60, 232)", fontSize:30}}>{status}</Text>
     
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
      title='Login'
      onPress={Login}
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