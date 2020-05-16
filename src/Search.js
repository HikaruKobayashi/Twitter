import React from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import color from 'color';

import { Feed } from './Feed';
import { Trend } from './Trend';
import News from './News';
// import { Sports } from './Sports';
// import { Humor } from './Humor';

const initialLayout = { width: Dimensions.get("window").width };
const Recommend = () => <Feed />;


export const Search = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'recommend', title: 'Recommend' },
    { key: 'trend', title: 'Trend' },
    { key: 'news', title: 'News' },
    // { key: 'sports', title: 'Sports' },
    // { key: 'humor', title: 'Humor'}
  ]);
  const theme = useTheme();
  const renderScene = SceneMap({
    recommend: Recommend,
    trend: Trend,
    news: News,
    // sports: Sports,
    // humor: Humor
  });

  const tabBarColor = theme.colors.surface;

  const renderTabBar = props => (
    <TabBar 
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: tabBarColor, shadowColor: theme.colors.text }}
      labelStyle={{ color: theme.colors.text }}
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
        swipeEnabled={true}
      />
    </React.Fragment>
  )
}