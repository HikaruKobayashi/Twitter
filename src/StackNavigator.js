import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Feed } from './Feed';
import { Details } from './Details';

const Stack = createStackNavigator();

const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const theme = useTheme();
  const title =
    options.headerTitle !== undefined
    ? options.headerTitle
    : options.title !== undefined
    ? options.title
    : scene.route.name;

  return (
    <Appbar.Header theme = {{ colors: {primary: theme.colors.surface }}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          colors={theme.colors.primary}
        />
      ) : (
        <TouchableOpacity
          onPress = {() => {
            navigation.openDrawer();
          }}
        >
          <Avatar.Image
            size={40}
            source={require('./../assets/icon.jpg')}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? title : <MaterialCommunityIcons name='twitter' size={40} />
        }
      />
    </Appbar.Header>
  )
}

export const StackNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName='Feed'
      headerMode='screen'
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        )
      }}
    >
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerTitle: 'Twitter' }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Details' }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})