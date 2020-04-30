import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Messages = props => {
  return (
    <View style={styles.container}>
      <Text>Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})