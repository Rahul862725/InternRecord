import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavbar from './bottomNavbar'

export default function Index() {
  return (
     <NavigationContainer>
        <BottomNavbar/>
     </NavigationContainer>
  )
}