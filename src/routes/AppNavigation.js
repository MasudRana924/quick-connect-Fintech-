import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import { useSelector } from 'react-redux';
import Register from '../screens/auth/Register';
import Reward from '../screens/reward/Reward';
import CashOutNumber from '../screens/cashout/CashOutNumber';
import CashOutAmount from '../screens/cashout/CashOutAmount';
import CashOutPin from '../screens/cashout/CashOutPin';
import CashOutConfirm from '../screens/cashout/CashOutConfirm';
import OtpVerify from '../screens/auth/OtpVerify';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const { userData } = useSelector(state => state.auth);
  return (
    <NavigationContainer>
       <StatusBar style="dark" backgroundColor="#E2136E" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userData ? (
          <Stack.Group>
            <Stack.Screen name="root" component={TabNavigation} />
            <Stack.Screen name="Reward" component={Reward} />
            <Stack.Screen name="CashOut" component={CashOutNumber} />
            <Stack.Screen name="CashOutAmount" component={CashOutAmount} />
            <Stack.Screen name="CashOutPin" component={CashOutPin} />
            <Stack.Screen name="CashOutConfirm" component={CashOutConfirm} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Otp-Verify" component={OtpVerify} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
});