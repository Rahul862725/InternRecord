 import { View, Text,Dimensions } from 'react-native'
 import React from 'react'
 import CharText from './Components/CharText'
import Index from './Components/Index'
 const width=Dimensions.get('window').width
 export default function App() {
   return (
      <Index />
   )
 }