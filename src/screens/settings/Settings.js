import React from 'react';
import { SafeAreaView, ScrollView, Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducers/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import avatar from '../../images/man.png';

const Settings = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const { user } = useSelector((state) => state.userdetails.userdetails);

  const menuItems = [
    { icon: <Entypo name="swap" size={24} color="#000814" />, label: 'Transactions', route: 'Transactions' },
    { icon: <FontAwesome name="info-circle" size={24} color="#000814" />, label: 'Information', route: 'Information' },
    { icon: <MaterialIcons name="notifications-none" size={24} color="#000814" />, label: 'Notification', route: 'Notifications' },
    { icon: <MaterialIcons name="offline-share" size={24} color="#000814" />, label: 'Limit', route: 'Limit' },
    { icon: <Entypo name="map" size={24} color="#000814" />, label: 'Map', route: 'Map' },
    { icon: <MaterialIcons name="local-offer" size={24} color="#000814" />, label: 'Coupon', route: 'Coupon' },
    { icon: <FontAwesome name="headphones" size={24} color="#000814" />, label: 'Support', route: 'Support' },
    { icon: <AntDesign name="questioncircleo" size={24} color="#000814" />, label: 'About QuickPay', route: 'AboutQuickPay' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
        <Text style={styles.headerText}>Settings</Text>
        </View>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E2136E',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    height:50
  },
  headerText:{
    paddingTop:15,
    fontSize:16,
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
    borderBottomColor: '#c5c3c6', // Set the border color
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
    paddingHorizontal: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000814',
    paddingVertical: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});
