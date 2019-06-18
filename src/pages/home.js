import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.headerLogo}
            source={require('../images/logo.png')} />
          <Text style={styles.headerText}> HYPER42 PRODUCTS </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flexGrow: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 30
  },
  headerLogo: {
    width: 80,
    height: 80
  },
  headerText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 30
  }
})
