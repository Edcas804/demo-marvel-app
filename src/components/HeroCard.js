import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HeroCard({ hero }) {
  const navigation = useNavigation()
  const handleOnPress = () => {
    navigation.navigate('HeroDetail', { id: hero.id })
  }
  if (!hero.id || hero.thumbnail?.path?.includes('image_not_available')) {
    return ''
  }
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.heroCard}>
        <Image
          source={{
            uri: `${hero.thumbnail?.path}.${hero.thumbnail?.extension}`,
          }}
          style={{
            width: 300,
            height: 450,
          }}
        />
        <Text style={styles.heroText}>{hero.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  heroCard: {
    width: 300,
    height: 450,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  heroText_: {
    position: 'absolute',
    bottom: 0,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  heroText: {
    flex: 1,
    position: 'absolute',
    bottom: 10,
    right: 0,
    width: '50%',
    borderBottomStartRadius: 200,
    borderTopStartRadius: 200,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 5,
    borderRightColor: '#f00',
  },
})
