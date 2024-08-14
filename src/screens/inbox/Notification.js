import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import TransactionsList from './TransactionsList';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noNotificationText}>No Notification</Text>
      <Text style={styles.notificationInfoText}>New notifications will appear here</Text>
      {/* <TransactionsList/> */}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // marginTop:200,
  },
  noNotificationText: {
    color: 'red',
    marginBottom:10
  },
  notificationInfoText: {
    color: 'gray',
    marginTop:10
  },
});
