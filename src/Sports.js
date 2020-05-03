import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Sports = props => {
  return (
    <View style={styles.container}>
      <Text>Sports</Text>
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