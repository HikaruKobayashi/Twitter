import React from 'react';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'

import { StackNavigator } from './StackNavigator';
import { DrawerCOntent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent = {props => <DrawerContent { ...props} />}>
      <Drawer.Screen name = "Home" component={StackNavigator} />
    </Drawer.Navigator>
  )
}