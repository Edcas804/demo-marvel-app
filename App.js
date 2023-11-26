import { NavigationContainer } from '@react-navigation/native'
import NavigationTab from './src/navigation/NavigationTab'

export default function App() {
  return (
    <NavigationContainer>
      {/*
      <NavigationStack />
      */}
      <NavigationTab />
    </NavigationContainer>
  )
}