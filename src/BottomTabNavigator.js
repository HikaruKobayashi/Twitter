import React from 'react';
import { creteMaterialBottomTabNavigator, createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Feed } from './Feed';
import { Messages } from './Messages';
import { Notifications } from './Notifications';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: 'home-account'
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: 'bell-outline'
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: 'message-text-outline'
        }}
      />
    </Tab.Navigator>
  );
};