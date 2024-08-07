import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ArrowIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// import QRCode from 'qrcode';
const UpdateName = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { user } = useSelector(state => state.auth.userData.user);
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.navInfo}>
                <ArrowIcon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></ArrowIcon>
                <Text style={styles.title}>Name </Text>
            </View>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        height: '100%'
    },
    navInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E2136E',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 100,
        paddingTop: 15
    },
    arrowIcon: {
        color: 'white',
        fontSize: 30,
        marginLeft: 5,
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginLeft: 45,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000814',
        height: 56,
        paddingHorizontal: 16,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 16,
    },
    profileContainer: {
        alignItems: 'center',
        padding: 16,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
    },
    avatarContainer: {
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userInfo: {
        alignItems: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    flag: {
        width: 40,
        height: 40,
        marginTop: 8,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop:15
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginLeft: 16,
    },
});

export default UpdateName;
