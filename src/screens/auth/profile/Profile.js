import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ArrowIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { user } = useSelector(state => state.auth.userData);
    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.navInfo}>
                <ArrowIcon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></ArrowIcon>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    {user?.avatarLogo ? (
                        <Image source={{ uri: user?.avatarLogo }} style={styles.avatar} />
                    ) : (
                        <Icon name="user" size={100} color="#ccc" />
                    )}
                </View>
                <View style={styles.userInfo}>
                    {user?.firstname && user?.lastname ? (
                        <Text style={styles.userName}>{user.firstname} {user.lastname}</Text>
                    ) : (
                        <Text style={styles.userName}>Mr. ABC</Text>
                    )}
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('UpdateName')}>
                    <Icon name="edit" size={24} color="#000814" />
                    <Text style={styles.optionText}>Change Name</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.option} >
                    <Icon name="image" size={24} color="#000814" />
                    <Text style={styles.optionText}>Change Photo</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.option} >
                    <ArrowIcon name="qr-code" size={24} color="#000814" />
                    <Text style={styles.optionText}>My QR Code</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
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
        backgroundColor: '#ff006e',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 70,
        // paddingTop: 15
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
    profileContainer: {
        alignItems: 'center',
        padding: 16,
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
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 15
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginLeft: 16,
    },
    qrCodeContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
});

export default Profile;
