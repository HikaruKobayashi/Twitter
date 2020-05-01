import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NotificationTweet } from './components/NotificationTweet';
import { notificationTweets } from './data';
import { useTheme } from "react-native-paper";

function renderItem({ item }) {
  return <NotificationTweet {...item} />;
}

function keyExtractor(item) {
  return item.id.toString();
}

export const AllNotifications = () => {
  const theme = useTheme();

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={notificationTweets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});