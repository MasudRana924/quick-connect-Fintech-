import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { createCashOut } from '../../redux/reducers/transactions/cashOutSlice';
import { clearStore } from '../../redux/reducers/transactions/sendSlice';
import { clearAgentNumber } from '../../redux/reducers/transactions/agentNumberSlice';
import Spinner from 'react-native-loading-spinner-overlay';
const CashOutConfirm = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const { token } = useSelector(state => state.auth.userData);
    const { type, receiverType } = useSelector(state => state.type.type);
    const { receiverphone, senderphone } = useSelector(state => state.type.receiverphone);
    const { amount } = useSelector(state => state.type.amount);
    const { password } = useSelector(state => state.type.password);
    const data = { receiverphone, type, amount, receiverType, senderphone, password }
    const handleConfirm = () => {
        dispatch(createCashOut({
            data, token
        }));
        dispatch(clearStore());
        dispatch(clearAgentNumber());
    };
    const { transactions, success, isLoading } = useSelector(state => state.cashOut.cashout);
    useEffect(() => {
        if (success) {
            navigation.navigate('CashOutSuccess');
        }
    }, [success, navigation]);
    return (
        <SafeAreaView style={styles.container}>
            <Spinner
                visible={isLoading}
                // textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <View style={styles.navInfo}>
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
                <Text style={styles.title}>Cash Out</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.containerTop}>
                    <Text style={styles.receiverPhoneTitle}>Recipient</Text>
                    <View style={styles.flexContainer}>
                        <TouchableOpacity style={styles.buttonZero}>
                            <Text style={styles.buttonZeroText}>0</Text>
                        </TouchableOpacity>
                        <Text style={styles.receiverPhone}>{receiverphone}</Text>
                    </View>
                </View>
                
                <ScrollView contentContainerStyle={styles.content}>
                <View style={{ marginTop: 0, flexDirection: 'row', justifyContent: 'space-between', gap: 20, width: '95%' }}>
                        <View>
                            <Text>Amount</Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>{amount}.00</Text>
                        </View>
                        <View>
                            <Text >Charge </Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}> 0.00 </Text>
                        </View>
                        <View>
                            <Text >Total  </Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}> {amount}.00 </Text>
                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CashOutConfirm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e9',
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
        paddingTop: 20
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
    contentContainer: {
        flex: 1,
        width: '100%',
    },
    content: {
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        backgroundColor: 'white',
    },
    containerTop: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    buttonZero: {
        marginRight: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#E2136E',
        borderRadius: 5,
    },
    buttonZeroText: {
        color: 'white',
        fontSize: 16,
    },
    receiverPhoneTitle: {
        fontSize: 12,
        alignSelf: 'flex-start',
    },
    receiverPhone: {
        fontSize: 12,
        alignSelf: 'flex-start',
        marginTop: 10
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    receiverAmount: {
        fontSize: 14,
    },
    confirmButton: {
        width: '100%',
        backgroundColor: '#E2136E',
        // borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 0,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});
