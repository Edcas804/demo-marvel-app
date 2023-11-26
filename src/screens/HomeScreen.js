import { Text, StyleSheet, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getCharacters } from '../services/api'
import HeroList from '../components/HeroList'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen() {
  const [heroes, setHeroes] = useState([])
  useEffect(() => {
    getCharacters()
      .then((data) => {
        console.log(`${data}`)
        setHeroes(data)
      })
      .finally(() => console.log('finalizado'))
    return () => {
      console.log('desmontado')
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <HeroList heroes={heroes} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
