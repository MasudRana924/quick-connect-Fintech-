import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay'; // Importing the Spinner component
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For using icons

const TransactionsList = ({ navigation }) => {
  


    return (
        <View style={styles.container}>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000814',
        padding: 16,
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 8,
    },
    content: {
        flex: 1,
    },
    card: {
        padding: 16,
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        padding: 8,
    },
    dateText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 8,
    },
    infoLabel: {
        fontSize: 14,
        color: '#333',
    },
    infoValue: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
    },
    typesContainer: {
        marginTop: 16,
    },
    typeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 8,
    },
    typeText: {
        fontSize: 14,
        color: '#333',
    },
    amountText: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TransactionsList;
