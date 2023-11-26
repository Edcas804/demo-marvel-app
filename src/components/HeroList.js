import React from 'react'
import { FlatList } from 'react-native'
import HeroCard from './HeroCard'

export default function HeroList({ heroes }) {
  return (
    <FlatList
      data={heroes}
      numColumns={1}
      renderItem={({ item }) => <HeroCard hero={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}
