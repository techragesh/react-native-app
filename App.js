import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Routes from './src/Routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#1c313a' barStyle="light-content"></StatusBar>
      <Routes></Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
