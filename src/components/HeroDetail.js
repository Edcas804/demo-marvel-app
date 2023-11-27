import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getHeroDetails } from '../services/api'
import HeroDetailHeader from './HeroDetailHeader'

export default function HeroDetail({ navigation, route: { params } }) {
  const [hero, setHero] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const data = await getHeroDetails({ id: params.id })
        setHero(data)
      } catch (error) {
        console.log('hero fetch error: ', error)
        navigation.goBack()
      }
    })()
  }, [params])
  if (!hero) return null
  return (
    <ScrollView style={{ backgroundColor: '#000' }}>
      <HeroDetailHeader
        image={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`}
        {...hero}
      />
      <View style={styles.container}>
        <View style={styles.badge}>
          <Text style={styles.title}>Comics</Text>
          <Text style={styles.title}>{hero.comics.available}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.title}>Series</Text>
          <Text style={styles.title}>{hero.series.available}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.title}>Events</Text>
          <Text style={styles.title}>{hero.events.available}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.title}>Stories</Text>
          <Text style={styles.title}>{hero.stories.available}</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 10,
  },
  badge: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'red',
    margin: 10,
    width: 40,
    height: 60,
    borderRadius: 100,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
})
