import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/organism/Home';

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={Home} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
