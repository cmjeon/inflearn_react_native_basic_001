import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/header';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Header/>
        <View style={styles.subView}>
          <Text style={styles.mainText}>hello world</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white', // green -> white
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20, // 50 -> 20
    fontWeight: 'normal', // 'bold' -> 'normal'
    color: 'red',
    padding: 20
  }
})

export default App;