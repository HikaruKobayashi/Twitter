import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const AllNotifications = props => {
  return (
    <View style={styles.container}>
      <Text>AllNotifications</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});