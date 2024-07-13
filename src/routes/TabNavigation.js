import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '../screens/home/Home';
import Settings from '../screens/settings/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Example: Using Ionicons

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = 14; // Set the icon size here

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; // Adjust icon names based on your preference
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
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
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 12,
    paddingBottom: 12,
    backgroundColor: 'white',
  },
  tabBarStyle: {
    borderColor: 'white',
    backgroundColor: 'white',
  },
});
