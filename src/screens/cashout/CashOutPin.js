import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { createTakePassword } from '../../redux/reducers/transactions/takePasswordSlice';
import { addPasswordToStore } from '../../redux/reducers/transactions/sendSlice';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
const CashOutPin = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const { receiverphone,amount} = useSelector(
        (state) => state.type
    );
    const {token } = useSelector(state => state.auth.userData);
    const [password, setPassword] = useState();
    const isPinValid = !!password;
    const data = {password }
    const handleStore = () => {
        dispatch(createTakePassword({
            data, token
        }));
        dispatch(addPasswordToStore({ password }))
    };
    const { success, errorr } = useSelector(
        (state) => state.takePassword
    );
    useEffect(() => {
        if (success) {
            navigation.navigate('CashOutConfirm');
        } if (errorr) {
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
        <SafeAreaView>
        <View style={styles.navInfo}>
            <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
            <Text style={styles.title}>Cash Out</Text>
        </View>
        <ScrollView>
        <View style={styles.container}>
                <Text style={styles.receiverPhoneTitle}>To</Text>
                <Text style={styles.receiverPhone}>Account Number {receiverphone?.receiverphone}</Text>
                <Text style={styles.receiverPhone}>Amount {amount?.amount}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Pin "
                        value={password}
                        onChangeText={setPassword}
                        keyboardType="numeric"
                    />
                     <TouchableOpacity
                        style={[styles.button, isPinValid ? styles.buttonActive : styles.buttonInactive]}
                        onPress={handleStore}
                        disabled={!isPinValid}
                    >
                        <Icon name="arrow-forward" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        <Toast />
    </SafeAreaView>
    );
};

export default CashOutPin;
const styles = StyleSheet.create({
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
    container: {
        flex: 1,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 5,
        marginTop:40,
        backgroundColor: 'white',
    },
    receiverPhoneTitle:{
        fontSize:16,
        alignSelf: 'flex-start',
    },
    receiverPhone:{
        fontSize:12,
        alignSelf: 'flex-start',
        marginTop:10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:20,
        paddingBottom:20
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
         borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    button: {
        width: 48,
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20bf55', // Set button color here
    },
    buttonActive: {
        backgroundColor: '#20bf55',
    },
    buttonInactive: {
        backgroundColor: 'gray',
    },
    helperText: {
        marginTop: 8,
        fontSize: 12,
        color: '#888',
    },
});

