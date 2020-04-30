import React from 'react';
import { View, Text, StylesSheet } from 'react-native';

export const DrawerContent = props => {
  return (
    <View style={styles.container}>
      <Text>DrawerContent</Text>
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