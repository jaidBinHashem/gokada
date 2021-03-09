import * as React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function PageOneScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: 'black'}]}>Welcome</Text>

      <Text onPress={() => navigation.openDrawer()} style={styles.text}>
        Open Side Menu
      </Text>
      <Text onPress={() => navigation.navigate('Page 2')} style={styles.text}>
        Go to page 2
      </Text>
      <Text
        onPress={() => navigation.navigate('Data Page')}
        style={styles.text}>
        Go to page data page
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#2196F3',
    fontSize: 18,
    margin: 5,
  },
});
