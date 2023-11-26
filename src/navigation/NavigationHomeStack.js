import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator()
export default function NavigationHomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeMain">
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          title: 'Inicio',
        }}
      />
      <Stack.Screen name="HomeLogin" component={LoginScreen} />
    </Stack.Navigator>
  )
}
