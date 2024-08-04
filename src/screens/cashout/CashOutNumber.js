import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { takeAgentNumber } from '../../redux/reducers/transactions/agentNumberSlice';
import { addPhoneToStore, addtypeToStore } from '../../redux/reducers/transactions/sendSlice';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';

const CashOutNumber = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const { user, token } = useSelector(state => state.auth.userData);
    const [receiverphone, setReceiverPhone] = useState('');
    const senderphone = user.phone;
    const type = 'Cash Out';
    const receiverType = "Received Money";
    const data = { receiverphone };
    const handleStore = () => {
        dispatch(takeAgentNumber({
            data, token
        }));
        dispatch(addPhoneToStore({ receiverphone, senderphone }));
        dispatch(addtypeToStore({ type, receiverType }));
    };
    const { success, errorr, isLoading } = useSelector(
        (state) => state.takeAgentNumber
    );
    useEffect(() => {
        if (success) {
            navigation.navigate('CashOutAmount');
        }
        if (errorr) {
            Toast.show({
                type: 'error',
                text1: errorr,
                position: 'top',
                duration: 2000,
                animationDuration: 250,
            });
        }
    }, [success, navigation, errorr]);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Spinner
                visible={isLoading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <View style={styles.navInfo}>
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
                <Text style={styles.title}>Cash Out</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Account Number"
                            value={receiverphone}
                            onChangeText={setReceiverPhone}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ced4da', marginTop: 8, borderRadius: 8, width: '75%', height: 44 }}>
                        <Icon style={{ color: '#E2136E', fontSize: 20 }} name="scan" size={24} color="white" />
                        <Text style={{ color: '#E2136E', fontSize: 14, marginLeft: 10 }}>Tap to scan QR code</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={handleStore}
                disabled={receiverphone.length !== 11}
            >
                {isLoading ? (
                    <Text style={styles.buttonText}>Loading...</Text>
                ) : (
                    <Text style={styles.buttonText}>Proceed</Text>
                )}
            </TouchableOpacity>
            <Toast />
        </SafeAreaView>
    );
};

export default CashOutNumber;

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
    container: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 8,
        height: 50
    },
    button: {
        height: 48,
        borderColor: '#E2136E',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2136E',
    },
    buttonText: {
        color: 'white'
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    buttonActive: {
        backgroundColor: '#E2136E',
    },
    buttonInactive: {
        backgroundColor: 'white',
    },
    helperText: {
        marginTop: 8,
        fontSize: 12,
        color: '#888',
    },
});
