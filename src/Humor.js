import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Humor = props => {
  return (
    <View style={styles.container}>
      <Text>Humor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});