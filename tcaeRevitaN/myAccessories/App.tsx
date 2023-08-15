import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Accesories from './components/Accesories'

export default function App() {
  return (
    
    <Provider store={store}>
       <SafeAreaView style={{flex:1}}>
     <Accesories/>
     </SafeAreaView>
     </Provider>
  )
}