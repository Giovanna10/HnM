import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/organism/home/Home';

const Navigator = () => {
  const Tab = createMaterialTopTabNavigator();
  const HomeStack = createStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBar={() => <></>}>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{header: () => <></>}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
