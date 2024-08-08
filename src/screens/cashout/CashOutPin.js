import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { createTakePassword } from '../../redux/reducers/transactions/takePasswordSlice';
import { addPasswordToStore } from '../../redux/reducers/transactions/sendSlice';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';

const CashOutPin = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const { receiverphone } = useSelector((state) => state.type);
    const { token } = useSelector(state => state.auth.userData);
    const [password, setPassword] = useState('');
    const isPinValid = !!password;
    const data = { password };

    const handleStore = () => {
        dispatch(createTakePassword({ data, token }));
        dispatch(addPasswordToStore({ password }));
    };

    const { success, errorr, isLoading } = useSelector(
        (state) => state.takePassword
    );

    const passwordInputRef = useRef(null);

    useEffect(() => {
        if (passwordInputRef.current) {
            passwordInputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (success) {
            navigation.navigate('CashOutConfirm');
        } else if (errorr) {
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
                textStyle={styles.spinnerTextStyle}
            />
            <View style={styles.navInfo}>
            <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
                <Text style={styles.title}>Cash Out</Text>
                <Icon name="ellipsis-vertical" style={styles.arrowIcon} ></Icon>
            </View>
            <ScrollView>
                <View style={styles.containerTop}>
                    <Text style={styles.receiverPhoneTitle}>Agent</Text>
                    <View style={styles.flexContainer}>
                        <TouchableOpacity style={styles.buttonZero}>
                            <Text style={styles.buttonZeroText}>0</Text>
                        </TouchableOpacity>
                        <Text style={styles.receiverPhone}>{receiverphone?.receiverphone}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, password ? styles.inputTextRed : {}]}
                            placeholder="Enter pin"
                            placeholderTextColor="#888" // Light gray color for placeholder
                            value={password}
                            onChangeText={setPassword}
                            keyboardType="numeric"
                            ref={passwordInputRef}
                            textAlign="center" // Center the placeholder text
                        />
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={[styles.button, isPinValid ? styles.buttonActive : styles.buttonInactive]}
                onPress={handleStore}
                disabled={!isPinValid}
            >
                <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
            <Toast />
        </SafeAreaView>
    );
};

export default CashOutPin;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        height: '100%'
    },
    navInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        fontSize:20,
    },
    title: {
        color: 'white',
        fontSize: 16,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 40,
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
    receiverPhoneTitle: {
        fontSize: 12,
        alignSelf: 'flex-start',
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
    receiverPhone: {
        fontSize: 12,
        alignSelf: 'flex-start',
        marginTop: 10
    },
    inputContainer: {
        marginTop: 20,
        paddingBottom: 20,
        width: '100%',
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
       
    },
    inputTextRed: {
        color: '#E2136E', 
        fontSize:20,
        fontWeight:'500'
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
    buttonActive: {
        opacity: 1,
    },
    buttonInactive: {
        opacity: 0.5,
    },
    helperText: {
        marginTop: 8,
        fontSize: 12,
        color: '#888',
    },
});
