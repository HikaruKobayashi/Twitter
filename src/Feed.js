import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { Tweet } from "./components/Tweet";
import { tweets } from "./data";
function renderItem({ item }) {
  return <Tweet {...item} />;
}
function keyExtractor(item) {
  return item.id.toString();
}
export const Feed = props => {
  const theme = useTheme();
  const data = tweets.map(tweetsProps => ({
    ...tweetsProps,
    onPress: () =>
      props.navigation && props.navigation.push("Details", { ...tweetsProps })
  }));
  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: theme.colors.background }}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  );
};