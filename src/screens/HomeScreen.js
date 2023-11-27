import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getCharacters } from '../services/api'
import HeroList from '../components/HeroList'

export default function HomeScreen() {
  const [heroes, setHeroes] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    getCharacters({ page })
      .then((data) => {
        setHeroes((state) => [...state, ...data])
      })
      .finally(() => console.log('finalizado'))
    return () => {}
  }, [page])

  return (
    <SafeAreaView style={styles.container}>
      <HeroList heroes={heroes} setPage={setPage} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
})
