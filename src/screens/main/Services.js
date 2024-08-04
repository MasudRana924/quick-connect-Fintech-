import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import sendImg from '../../assets/taka (5).png';
import cashOutImg from '../../assets/taka (6).png';
import rechargeImg from '../../assets/money.png';
import paymentImg from '../../assets/add-cart.png';
import addMoneyImg from '../../assets/wallet.png';
import loanImg from '../../assets/salary.png';
import savingsImg from '../../assets/approved.png';
import moreImg from '../../assets/app.png';
import { useNavigation } from '@react-navigation/native';

const Services = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Services</Text>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={sendImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Send Money</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('CashOut')}>
                    <Image source={cashOutImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Cash Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={rechargeImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Recharge</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={addMoneyImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Add Money</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={savingsImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Savings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={loanImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Loan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={moreImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Services;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#e9ecef', // Set the border color
        borderBottomWidth: 1,
        marginTop:10
    },
    Title:{
        marginHorizontal: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // margin: 10,
        // gap:10,
        flexWrap: 'wrap',
        marginTop:10
    },
    gridItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20, // Add horizontal margin to create a gap
        marginVertical: 10,
    },
    moneyIcon: {
        height: 30,
        width: 30,
        marginBottom: 6,
    },
    title: {
        fontSize: 12,
        textAlign: 'left',
        color:'#000000',
        marginTop:10,
        fontWeight: '500',
    },
});
