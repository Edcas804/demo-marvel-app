import { View, Text, Image } from 'react-native'
import React from 'react'

export default function HeroCard({ hero }) {
  return (
    <View key={hero.id}>
      <Image
        source={{
          uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
        }}
        style={{
          width: 300,
          height: 450,
        }}
      />
      <Text>{hero.name}</Text>
    </View>
  )
}
