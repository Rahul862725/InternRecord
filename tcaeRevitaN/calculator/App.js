import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';
import store from './store';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
// import { Router } from 'react-native-router-flux';

export default function App() {
  return (
    // <View style={styles.container}>
    
    <Provider   store={store}>
    <Navbar /> 
  
      <Calculator />
    </Provider>
    
    
    //   {/* <Button /> */}
    //   {/* <StatusBar style="auto" /> */}
    // {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
    
}});
