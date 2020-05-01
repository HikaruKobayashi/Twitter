import React from 'react';
import { creteMaterialBottomTabNavigator, createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';
import color from 'color';

import { Feed } from './Feed';
import { Messages } from './Messages';
import { Notifications } from './Notifications';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  const theme = useTheme();
  const tabBarColor = theme.dark
  ? overlay(6, theme.colors.surface)
  : theme.colors.surface

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        shifting={true}
        sceneAnimationEnabled={false}
        backBehavior='initialRoute'
        activeColor={theme.colors.text}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()
        }
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: 'home-account', tabBarColor
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: 'bell-outline', tabBarColor
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarIcon: 'message-text-outline', tabBarColor
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          icon='feather'
          style={{
            position: 'absolute',
            bottom: 100,
            right: 16
          }}
        />
      </Portal>
    </React.Fragment>
  );
};