 import { View, Text } from 'react-native'
 import React from 'react'
 import { Provider } from 'react-redux'
 import { NavigationContainer } from '@react-navigation/native'
 import store from './store'
 import { createNativeStackNavigator } from '@react-navigation/native-stack'
 import User1 from './components/User1'
import Index from './components/Index'
 export default function App() {

  const Stack=createNativeStackNavigator();
   return (
     <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="index" component={Index}></Stack.Screen>
          <Stack.Screen name="user1" component={User1}></Stack.Screen>
        </Stack.Navigator>
        
      </Provider>
     </NavigationContainer>
   )
 }