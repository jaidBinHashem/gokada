import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function User({name, city}) {
  return (
    <TouchableOpacity style={styles.userContainer}>
      <Text>Name: {name}</Text>
      <Text>City: {city}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
