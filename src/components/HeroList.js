import React from 'react'
import { FlatList } from 'react-native'
import HeroCard from './HeroCard'

export default function HeroList({ heroes, setPage }) {
  const loadMore = () => {
    setPage((state) => state + 1)
  }
  return (
    <FlatList
      data={heroes}
      numColumns={1}
      renderItem={({ item }) => <HeroCard hero={item} />}
      keyExtractor={(item) => item.id * Math.random() * 1000}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
    />
  )
}
