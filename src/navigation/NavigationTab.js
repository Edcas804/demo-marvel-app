import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native'
import AccountScreen from '../screens/AccountScreen'
import NavigationFavoriteStack from './NavigationFavoriteStack'
import NavigationHomeStack from './NavigationHomeStack'
const Tab = createBottomTabNavigator()
export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="favorites"
        component={NavigationFavoriteStack}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="home"
        component={NavigationHomeStack}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => renderLogo(),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Cuenta',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          title: 'Cuenta',
        }}
      />
    </Tab.Navigator>
  )
}

function renderLogo() {
  return (
    <Image
      source={require('../assets/icon.png')}
      style={{
        width: 50,
        height: 50,
        top: -15,
      }}
    />
  )
}
