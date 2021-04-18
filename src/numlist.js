import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NumList = (props) => {
  return (
    props.numbers.map((item, idx)=>(
      <View style={styles.numList} key={idx}>
        <TouchableOpacity
          style={styles.numList}
          key={idx}
          onPress={()=>props.delete(idx)}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      </View>
    ))
  )
}

const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5
  }
})

export default NumList;