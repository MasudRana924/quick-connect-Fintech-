import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '../screens/home/Home';
import Settings from '../screens/settings/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Example: Using Ionicons
import Inbox from '../screens/inbox/Inbox';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = 24; // Set the icon size here

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; // Adjust icon names based on your preference
          } else if (route.name === 'Account') {
            iconName = focused ? 'settings' : 'settings-outline';
          }else if (route.name === 'Inbox') {
            iconName = focused ? 'mail' : 'mail-outline'; // Adjust icon names based on your preference
          }

          // Return the icon component
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: '#E2136E',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Account" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 16,
  },
  tabBarStyle: {
    borderTopColor: '#f8f9fa',
    backgroundColor: '#f8f9fa',
    height:60,
    paddingBottom:10,
    paddingTop:5
  },
});
