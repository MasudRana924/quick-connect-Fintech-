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

const PaymentCategory = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
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
                    <Image source={paymentImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Payment</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={addMoneyImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Add Money</Text>
                </TouchableOpacity>
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

export default PaymentCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    gridItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    moneyIcon: {
        height: 20,
        width: 20,
        borderRadius: 20,
        marginBottom: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
    },
    title: {
        fontSize: 10,
        textAlign: 'start',
        color:'##000000'
    },
});
