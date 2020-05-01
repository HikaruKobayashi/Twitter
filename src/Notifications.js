import React from "react";
import { useTheme } from "react-native-paper";
import { Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import color from "color";
import { Feed } from "./Feed";
import { AllNotifications } from "./All";
const initialLayout = { width: Dimensions.get("window").width };
const All = () => <AllNotifications />;
const Mentions = () => <Feed />;
export const Notifications = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "all", title: "All" },
    { key: "mentions", title: "Mentions" }
  ]);
  const theme = useTheme();
  const renderScene = SceneMap({
    all: All,
    mentions: Mentions
  });
  const tabBarColor = theme.colors.surface;
  const rippleColor = theme.dark
    ? color(tabBarColor).lighten(0.5)
    : color(tabBarColor).darken(0.2);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: tabBarColor, shadowColor: theme.colors.text }}
      labelStyle={{ color: theme.colors.text }}
      pressColor={rippleColor}
    />
  );
  return (
    <React.Fragment>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </React.Fragment>
  );
};