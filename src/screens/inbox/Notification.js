import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noNotificationText}>No Notification</Text>
      <Text style={styles.notificationInfoText}>Notifications will appear here</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noNotificationText: {
    color: 'red',
  },
  notificationInfoText: {
    color: 'gray',
    marginTop:10
  },
});
