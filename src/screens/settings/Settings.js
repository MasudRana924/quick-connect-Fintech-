import React from 'react';
import { SafeAreaView, ScrollView, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
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

  const menuItems = [
    { icon: <FontAwesome name="info-circle" size={24} color="#fff" />, label: 'Account Information', route: 'Information' },
    { icon: <MaterialIcons name="notifications-none" size={24} color="#fff" />, label: 'Notification', route: 'Notifications' },
    { icon: <MaterialIcons name="offline-share" size={24} color="#fff" />, label: 'Limit', route: 'Limit' },
    { icon: <Entypo name="map" size={24} color="#fff" />, label: 'Map', route: 'Map' },
    { icon: <MaterialIcons name="local-offer" size={24} color="#fff" />, label: 'Coupon', route: 'Coupon' },
    { icon: <FontAwesome name="headphones" size={24} color="#fff" />, label: 'Settings', route: 'Support' },
    { icon: <FontAwesome name="headphones" size={24} color="#fff" />, label: 'Support', route: 'Support' },
    { icon: <AntDesign name="questioncircleo" size={24} color="#fff" />, label: 'About QuickPay', route: 'AboutQuickPay' },
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
              <View style={styles.iconContainer}>
                {item.icon}
              </View>
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
    backgroundColor: '#ffff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3a86ff',
    paddingHorizontal: 16,
    height: 70,
  },
  arrowIcon: {
    color: 'white',
    fontSize: 20,
    paddingTop: 15
  },
  headerText: {
    paddingTop: 15,
    fontSize: 20,
    color: 'white'
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
    marginTop: 10
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#3a86ff',
    padding: 8,
    borderRadius: 50,
    marginRight: 10, // Space between icon and text
  },
  menuItemText: {
    fontSize: 16,
  },
  logoutContainer: {
    marginTop: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a86ff',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%'
  },
  logoutText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
  },
});
