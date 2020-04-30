import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Details = props => {
  return (
    <View style={styles.container} >
      <Text>Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})