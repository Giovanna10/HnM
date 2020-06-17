import GenreScreen from '../components/organism/home/genreScreen/GenreScreen';
import Home from '../components/organism/home/Home';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeArea} from './navigatorStyle';
import {StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Navigator = () => {
  const Tab = createMaterialTopTabNavigator();
  const HomeStack = createStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={() => (
          <SafeArea>
            <StatusBar barStyle="light-content" />
          </SafeArea>
        )}>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{header: () => <></>}}
        />
        <HomeStack.Screen
          name="Genres"
          component={GenreScreen}
          options={{header: () => <></>}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
