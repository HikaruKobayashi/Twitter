import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Trend = props => {
  return (
    <View style={styles.container}>
      <Text>Trends</Text>
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