import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';

class App extends Component {
  state = {
    appName: 'My First App',
    random: [36, 999]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1; // 1~100 사이의 숫자 생성
    this.setState(prevState => {
      return this.state.random = [...prevState.random, randomNum]
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index)=>{
      return position != index;
    })
    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Header
          name={this.state.appName}
        />
        <View style={styles.subView}>
          <TouchableOpacity>
            <Text
              style={styles.mainText}
              onPress={()=>alert('text touch event')}
            >Hello World</Text>
          </TouchableOpacity>
        </View>
        <Generator
          add={this.onAddRandomNum}
        />
        <NumList
          numbers={this.state.random}
          delete={this.onNumDelete}
        />
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
    // justifyContent: 'center',
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