import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native'
import { capitalize } from 'lodash'

export default function HeroDetailHeader({
  name,
  description,
  image,
  modified,
}) {
  const modifiedDate = new Date(modified).getFullYear()
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>{capitalize(name)}</Text>
          <Text style={styles.title}>{modifiedDate}</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    right: 0,
    width: '50%',
    borderBottomStartRadius: 200,
    borderTopStartRadius: 200,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 5,
    borderRightColor: '#f00',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentImg: {
    width: '100%',
    height: 450,
    borderBottomStartRadius: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
