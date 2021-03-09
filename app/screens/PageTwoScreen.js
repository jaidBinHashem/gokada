import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default function PageTwoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go Back To Page 1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
