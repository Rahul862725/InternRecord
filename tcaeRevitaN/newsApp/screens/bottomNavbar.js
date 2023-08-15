import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home'
import About from '../components/About'
import Icon from 'react-native-vector-icons/FontAwesome';

const tabs = createBottomTabNavigator()
export default function bottomNavbar() {
    return (
        <tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'About') {
              iconName = focused ? 'user' : 'user';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle:{
            backgroundColor:'rgb(215, 215, 215)'
          }
        })}
        >
            <tabs.Screen
                name="Home" component={Home}
                options={{
                    headerStyle: {
            backgroundColor: 'black',
             
          },
          headerTintColor:'#fff'
                }}
            ></tabs.Screen>

            <tabs.Screen
                name="About" component={About}
                options={{
                    headerStyle: {
            backgroundColor: 'black',
             
          },
          headerTintColor:'#fff'
                }}
            ></tabs.Screen>
        </tabs.Navigator>
    )
}