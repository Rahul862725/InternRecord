 import { View, Text ,StyleSheet} from 'react-native'
 import React from 'react'
 
 export default function Login() {
    const url = "http://127.0.0.1:3000/login"
    const naviagte=useNavigate();
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

      const Login=(e)=>{
        e.preventDefault();
        axios.post(url, {
            Email: data.Email,
            Password: data.Password
        }).then(res => {
            console.log(res)
            if(res.data){
                setStatus("")
            naviagte('/calculator')
            }
            else{
                setStatus("Email or Password is Wrong!")
            }

        })

      }
  return (
    <View style={styles.container}>
    <Text   style={{fontWeight:"bold",marginBottom:"20px", marginTop:"20px",color:"rgb(60, 60, 232)", fontSize:"30px"}}>{status}</Text>
     
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