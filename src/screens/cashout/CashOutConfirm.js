import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BirdIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { createCashOut } from '../../redux/reducers/transactions/cashOutSlice';
import { clearStore } from '../../redux/reducers/transactions/sendSlice';
import { clearAgentNumber } from '../../redux/reducers/transactions/agentNumberSlice';
import Spinner from 'react-native-loading-spinner-overlay';
import LottieView from 'lottie-react-native';
const CashOutConfirm = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isButtonBlack, setIsButtonBlack] = useState(false);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const { token } = useSelector(state => state.auth.userData);
    const { type, receiverType } = useSelector(state => state.type.type);
    const { receiverphone, senderphone } = useSelector(state => state.type.receiverphone);
    const { amount } = useSelector(state => state.type.amount);
    const { password } = useSelector(state => state.type.password);
    const data = { receiverphone, type, amount, receiverType, senderphone, password };

    const handleConfirm = () => {
        dispatch(createCashOut({ data, token }));
    };

    const { success } = useSelector(state => state.cashOut.cashout);
    const { isLoading } = useSelector(state => state.cashOut);

    useEffect(() => {
        if (success) {
            navigation.navigate('CashOutSuccess');
            dispatch(clearStore());
            dispatch(clearAgentNumber());
        }
    }, [success, navigation, dispatch]);

    return (
        <SafeAreaView style={styles.container}>
            <Spinner
                visible={isLoading}
                textStyle={styles.spinnerTextStyle}
                customIndicator={
                    <LottieView
                        source={require('../../assets/flyingbird.json')}  // Add your Lottie file here
                        autoPlay
                        loop
                        style={styles.loaderAnimation}
                    />
                }
            />
            <View style={styles.navInfo}>
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
                <Text style={styles.title}>Cash Out</Text>
                <Icon name="ellipsis-vertical" style={styles.arrowIcon}></Icon>
            </View>
            
            <ScrollView>
                <View style={styles.containerTop}>
                    <Text style={styles.receiverPhoneTitle}>Agent</Text>
                    <View style={styles.flexContainer}>
                        <TouchableOpacity style={styles.buttonZero}>
                            <Text style={styles.buttonZeroText}>0</Text>
                        </TouchableOpacity>
                        <Text style={styles.receiverPhone}>{receiverphone}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={{ marginTop: 0, flexDirection: 'row', justifyContent: 'space-between', gap: 20, width: '95%' }}>
                        <View>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Amount</Text>
                            <Text style={{ fontSize: 22, marginTop: 8 }}>{amount}.00</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Charge </Text>
                            <Text style={{ fontSize: 22, marginTop: 8 }}> 0.00 </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Total  </Text>
                            <Text style={{ fontSize: 22, marginTop: 8 }}> {amount}.00 </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
                <TouchableOpacity
                    style={[styles.confirmButton, isButtonBlack && styles.blackButton]}
                    onPress={handleConfirm}
                >
                    <Text style={styles.confirmButtonText}>Tap</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CashOutConfirm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e9',
        height: '100%',
    },
    navInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ff006e',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 70,
        // paddingTop: 10
    },
    arrowIcon: {
        color: 'white',
        fontSize: 20,
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    birdIcon: {
        fontSize: 100,
        color: 'white',
    },
    loaderAnimation: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        fontSize: 80,
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        // height: 200
    },
    content: {
        // height:100,
        flex: 1,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    containerTop: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
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
        backgroundColor: '#ff006e',
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
        marginTop: 10,
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
        width: 100,
        backgroundColor: '#ff006e',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderRadius: 100,
        alignSelf: 'center',
        overflow: 'hidden',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',

    },
    // blackButton: {
    //     backgroundColor: 'black',
    // },
});
