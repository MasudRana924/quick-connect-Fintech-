import React from 'react';
import { SafeAreaView, ScrollView, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/auth/authSlice';
const Settings = () => {
  const fakeData = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3' },
    { id: 4, title: 'Item 4', description: 'Description for Item 4' },
    { id: 5, title: 'Item 5', description: 'Description for Item 5' },
    { id: 6, title: 'Item 6', description: 'Description for Item 6' },
    { id: 7, title: 'Item 7', description: 'Description for Item 7' },
    { id: 8, title: 'Item 8', description: 'Description for Item 8' },
    { id: 9, title: 'Item 9', description: 'Description for Item 9' },
    { id: 10, title: 'Item 10', description: 'Description for Item 10' },
  ];
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sticky Navbar/Header</Text>
      </View>
      {/* <ScrollView contentContainerStyle={styles.content}>
        {fakeData.map(item => (
          <View style={styles.item} key={item.id}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        ))}
      </ScrollView> */}
      <Text onPress={() => dispatch(logout())}>Logout</Text>
    </SafeAreaView>
  );
};

export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff', // Adjust background color as needed
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Adjust border color as needed
    zIndex: 1, // Ensure the header stays above the content
    paddingTop: 36,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  item: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  // container: {
  //   flex: 1,
  //   paddingHorizontal: '5%',
  //   paddingTop:20
  // },
  // img: {
  //   width: '100%',
  //   height: 200,
  //   resizeMode: 'cover',
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  // },
  // title: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginTop: 10,
  // },
  // price: {
  //   fontSize: 18,
  //   marginTop: 10,
  // },
  // cardBox: {
  //   marginBottom: 30,
  //   paddingBottom: 20,
  //   borderRadius: 20,
  //   backgroundColor: 'white',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },
  // footer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 20,
  // },
});