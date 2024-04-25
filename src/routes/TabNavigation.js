import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import Home from '../screens/home/Home';
import Settings from '../screens/settings/Settings';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle:styles.tabBarStyle,
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: '#ef2d56', 
        inactiveTintColor: 'black',
      }}>
        
      <Tab.Screen name="Home"      component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBarIconStyle: {
    display: 'none',
  },
  tabBarLabelStyle: {
    fontSize: 18,
    paddingBottom: 18,
    backgroundColor: 'white',
  },
  tabBarStyle: {
    borderColor:'white',
    backgroundColor: 'white',
  },
});