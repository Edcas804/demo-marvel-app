import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import HeroDetail from '../components/HeroDetail'

const Stack = createNativeStackNavigator()
export default function NavigationHomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeMain">
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="HeroDetail"
        component={HeroDetail}
        options={{ title: '', headerTransparent: true }}
      />
      <Stack.Screen name="HomeLogin" component={LoginScreen} />
    </Stack.Navigator>
  )
}
