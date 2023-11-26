import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoritesScreen from '../screens/FavoritesScreen'

const Stack = createNativeStackNavigator()
export default function NavigationFavoriteStack() {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favoritos',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
    </Stack.Navigator>
  )
}
