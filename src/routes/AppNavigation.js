import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import {useSelector} from 'react-redux';
import Register from '../screens/auth/Register';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const {userData} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userData ? (
          <Stack.Group>
            <Stack.Screen name="root" component={TabNavigation} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});