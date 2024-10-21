import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import rabbitImg from '../../../assets/rabbithole.webp';
import tsportsImg from '../../../assets/t-sports.jpg';
import moreImg from '../../../assets/more.png';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
const Sports = () => {
 

  const services = [
    { id: '1', title: 'Rabbithole', img: rabbitImg },
    { id: '2', title: 'Tsports', img: tsportsImg },
    { id: '3', title: 'More', img: moreImg },
  ];



  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false)
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

    // if (Platform.OS === 'android') {
    //   Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
    // }
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Sports</Text>
      
      {/* Your grid of items */}
      {/* <View style={styles.gridContainer}>
        {services.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.gridItem}
            onPress={() => item.navigate && navigation.navigate(item.navigate)}
          >
            <Image source={item.img} style={styles.imageIcon} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View> */}

      {/* Button to send push notification */}
      <Button title="Send Notification" onPress={sendPushNotification} />
    </View>
  );
};


export default Sports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  Title: {
    marginHorizontal: 20,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'#e5e5e5'
  },
  gridContainer: {
    justifyContent: 'space-between',
  },
  gridItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    minWidth: 0, // Ensure items don't stretch unnecessarily
  },
  placeholderItem: {
    backgroundColor: 'transparent',
  },
  imageIcon: {
    height: 40,
    width: 40,
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    marginTop: 10,
    fontWeight: '500',
  },
});
