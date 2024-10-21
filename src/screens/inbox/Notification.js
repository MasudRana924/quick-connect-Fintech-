import React from 'react';
import { View, Text, StyleSheet,Dimensions ,Image,SafeAreaView} from 'react-native';
import TransactionsList from './TransactionsList';
import offerImg from '../../assets/offer/images-1.jpg';
import offerImgTwo from '../../assets/offer/images (2).jpg';
const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.noNotificationText}>No Notification</Text>
      <Text style={styles.notificationInfoText}>New notifications will appear here</Text> */}
      {/* <TransactionsList/> */}
      <View style={styles.card}>
      <Image source={offerImg} style={styles.imageIcon} />
      </View>
      <View style={styles.card}>
      <Image source={offerImgTwo} style={styles.imageIcon} />
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  noNotificationText: {
    color: 'red',
    marginBottom:10
  },
  notificationInfoText: {
    color: 'gray',
    marginTop:10
  },
  card:{
    width:'100%',
    marginTop:10,
    borderWidth: 1,
    borderColor: '#ccc',
  }
});
