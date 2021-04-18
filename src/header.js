import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = (props) => (
  <TouchableOpacity
    style={styles.header}
    onPress={() => { alert('hello world') }}
  >
    <View style={styles.header}>
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%'
  }
})

export default Header;