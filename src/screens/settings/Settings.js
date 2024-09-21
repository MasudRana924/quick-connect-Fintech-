import React from 'react';
import { SafeAreaView, ScrollView, Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducers/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const { user } = useSelector((state) => state.userdetails.userdetails);

  const menuItems = [
    { icon: <FontAwesome name="info-circle" size={24} color="#000814" />, label: 'Account Information', route: 'Information' },
    { icon: <MaterialIcons name="notifications-none" size={24} color="#000814" />, label: 'Notification', route: 'Notifications' },
    { icon: <MaterialIcons name="offline-share" size={24} color="#000814" />, label: 'Limit', route: 'Limit' },
    { icon: <Entypo name="map" size={24} color="#000814" />, label: 'Map', route: 'Map' },
    { icon: <MaterialIcons name="local-offer" size={24} color="#000814" />, label: 'Coupon', route: 'Coupon' },
    { icon: <FontAwesome name="headphones" size={24} color="#000814" />, label: 'Settings', route: 'Support' },
    { icon: <FontAwesome name="headphones" size={24} color="#000814" />, label: 'Support', route: 'Support' },
    { icon: <AntDesign name="questioncircleo" size={24} color="#000814" />, label: 'About QuickPay', route: 'AboutQuickPay' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
        <Icon name="ellipsis-vertical" style={styles.arrowIcon} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(item.route)} style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              {/* {item.icon} */}
              <Text style={styles.menuItemText}>{item.label}</Text>
            </View>
            <AntDesign name="right" size={24} color="#888" />
          </TouchableOpacity>
        ))}
        <View style={styles.logoutContainer}>
          <Pressable style={styles.logoutButton} onPress={() => dispatch(logout())}>
            <AntDesign name="logout" size={20} color="#fff" />
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ff006e',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 70,
    // paddingTop: 10
  },
  arrowIcon: {
    color: 'white',
    fontSize: 20,
    paddingTop: 15
},
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    height:50
  },
  headerText:{
    paddingTop:15,
    fontSize:20,
    color:'white'

  },
  headerRight: {
    justifyContent: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#E5E8E8', // Set the border color
    borderBottomWidth: 1,
    marginTop:10
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutContainer: {
    marginTop: 20,
    // paddingHorizontal: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0c0c0',
    paddingVertical: 15,
    borderRadius: 5,
    width:'100%'
  },
  logoutText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
  },
});
