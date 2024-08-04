import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import avatarImg from '../../assets/man.png'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    const { user } = useSelector(state => state.auth.userData);
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={styles.userInfo}>
                <TouchableOpacity onPress={() => console.log('Go to profile')}>
                    {user?.avatarLogo ? (
                        <Image source={avatarImg} style={styles.avatar} />
                    ) : (
                        <Image source={avatarImg} style={styles.avatar} />
                    )}
                </TouchableOpacity>
                <View style={styles.userInfoText}>
                    {user?.firstname && user?.lastname ? (
                        <Text style={styles.name}>{user.firstname} {user.lastname}</Text>
                    ) : (
                        <Text style={styles.name}>Loading...</Text>
                    )}
                    {user?.amount ? (
                        <View style={styles.amountContainer}>
                            <Text style={styles.currency}>ট </Text>
                            <Text style={styles.amount}>{user.amount}.00</Text>
                        </View>
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </View>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => navigation.navigate('Reward')}>
                    <Icon name="trophy-outline" style={styles.actionIcon}></Icon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Go to notifications')}>
                    <Icon name="notifications" style={styles.actionIcon} ></Icon>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#E2136E',
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        height: 80,
        paddingTop:10
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15, // Adjusted border radius
        marginRight: 10, // Increase margin for separation
    },
    userInfoText: {
        marginLeft: 10,
    },
    name: {
        color: 'white',
        fontSize: 12,
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    currency: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    amount: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center', // Align items vertically
    },
    actionIcon: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20, // Increase margin for separation
    },
});
