// src/screens/inbox/Inbox.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Notification from './Notification';
import Transaction from './Transaction';
import TransactionsChart from './TransactionsChart';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
const Inbox = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleGoBack = () => {
      navigation.goBack();
  };
  const [selectedComponent, setSelectedComponent] = useState('Statistics');

  // const renderComponent = () => {
  //   if (selectedComponent === 'Notification') {
  //     return <Notification />;
  //   } else if (selectedComponent === 'Transaction') {
  //     return <Transaction />;
  //   }
  // };
  const renderComponent = () => {
    if (selectedComponent === 'Statistics') {
      return <TransactionsChart />;
    } else if (selectedComponent === 'Transaction') {
      return <Transaction />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
        <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
          <Text style={styles.headerText}>Inbox</Text>
          <Icon name="ellipsis-vertical" style={styles.arrowIcon} ></Icon>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setSelectedComponent('Statistics')}>
          <Text style={[styles.buttonText, selectedComponent === 'Statistics' && styles.selectedText]}>
            Statistics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedComponent('Transaction')}>
          <Text style={[styles.buttonText, selectedComponent === 'Transaction' && styles.selectedText]}>
            Transaction
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {renderComponent()}
      </View>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: '#E2136E',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 100,
    paddingTop: 20
  },
  headerLeft: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowIcon: {
    color: 'white',
    fontSize: 20,
    marginLeft: 5,
    paddingTop: 10,
},
  headerText: {
    paddingTop: 10,
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  headerRight: {
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    color: 'gray',
  },
  selectedText: {
    color: '#E2136E',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
});
