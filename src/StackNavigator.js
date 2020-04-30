import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const StackNavigator = props => {
  return (
    <View style={styles.container}>
      <Text>StackNavigator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})