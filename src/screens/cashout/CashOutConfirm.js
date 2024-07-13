import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity,ScrollView,Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { createCashOut } from '../../redux/reducers/transactions/cashOutSlice';
import { clearStore } from '../../redux/reducers/transactions/sendSlice';
import { clearAgentNumber } from '../../redux/reducers/transactions/agentNumberSlice';

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
    const { transactions,success } = useSelector(state => state.cashOut.cashout);
    const modalVisible = success;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navInfo}>
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
                <Text style={styles.title}>Cash Out</Text>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.receiverPhoneTitle}>To</Text>
                    <Text style={styles.receiverPhone}>Account Number {receiverphone}</Text>
                    <View style={{ marginTop: 20, flexDirection: 'row',justifyContent: 'space-between' }}>
                        <Text>Amount {amount}</Text>
                        <Text style={{ marginLeft: 30 , fontSize:12}}>Charge 0</Text>
                        <Text style={{ marginLeft: 40 }}>Total {amount}</Text>
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
            {modalVisible && ( 
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                       
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View>
                            <Text style={{fontSize:18}}>প্রাপক</Text>
                            <View>
                                <Text>{transactions.receiverphone}</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
};

export default CashOutConfirm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: '100%'
    },
    navInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#20bf55',
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
        width: '95%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 10,
        marginTop: 40,
        backgroundColor: 'white',
    },
    receiverPhoneTitle: {
        fontSize: 16,
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
        backgroundColor: '#20bf55',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 0,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'white',
        height: '100%',
        marginVertical: '5%',
    },
});
