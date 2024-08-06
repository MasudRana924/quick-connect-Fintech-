// src/screens/inbox/Inbox.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Notification from './Notification';
import Transaction from './Transaction';

const Inbox = () => {
  const [selectedComponent, setSelectedComponent] = useState('Notification');

  const renderComponent = () => {
    if (selectedComponent === 'Notification') {
      return <Notification />;
    } else if (selectedComponent === 'Transaction') {
      return <Transaction />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>Inbox</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setSelectedComponent('Notification')}>
          <Text style={[styles.buttonText, selectedComponent === 'Notification' && styles.selectedText]}>
           Notification
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
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: '#E2136E',
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    // zIndex: 1,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    paddingTop: 10,
    fontSize: 18,
    color: 'white',
    textAlign:'center'
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
