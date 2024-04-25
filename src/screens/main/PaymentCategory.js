import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import sendImg from '../../assets/taka (5).png';
import cashOutImg from '../../assets/taka (6).png';
import rechargeImg from '../../assets/money.png';
import paymentImg from '../../assets/add-cart.png';
import addMoneyImg from '../../assets/wallet.png';
import loanImg from '../../assets/salary.png';
import savingsImg from '../../assets/approved.png';
import moreImg from '../../assets/app.png';
const PaymentCategory = () => {

    return (
        <View style={styles.container}>
            <View style={styles.gridContainer}>
                <View>
                <Image source={sendImg} style={styles.moneyIcon} />
                <Text style={styles.title}>Send Money</Text>
                </View>
                <View>
                <Image source={cashOutImg} style={styles.moneyIcon} />
                <Text style={styles.title}>Cash Out</Text>
                </View>
                <View>
                <Image source={rechargeImg} style={styles.moneyIcon} />
                <Text style={styles.title}>Recharge</Text>
                </View>
                <View>
                <Image source={paymentImg} style={styles.moneyIcon} />
                <Text style={styles.title}>Payment</Text>
                </View>
            </View>
            <View style={styles.gridContainer}>
                <View>
                <Image source={addMoneyImg} style={styles.moneyIcon} />
                <Text style={styles.title}>Add Money</Text>
                </View>
                <View>
                <Image source={savingsImg} style={styles.moneyIcon} />
                <Text style={styles.title}>Savings</Text>
                </View>
                <View>
                <Image source={loanImg} style={styles.moneyIcon} />
                <Text style={styles.title}>Loan</Text>
                </View>
                <View>
                <Image source={moreImg} style={styles.moneyIcon} />
                <Text style={styles.title}>more</Text>
                </View>
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
        margin:10
    },
    moneyIcon:{
        height:40,
        width:40,
    },
    title:{
        fontSize:12,
        marginTop:6,
        textAlign:'center'
    }
});
