import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addAmountToStore } from '../../redux/reducers/transactions/sendSlice';

const CashOutAmount = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const { receiverphone } = useSelector(
        (state) => state.type.receiverphone
    );
    const { user } = useSelector(state => state.auth.userData);
    const [amount, setAmount] = useState('');
    const isAmountValid = !!amount;

    const handleStore = () => {
        dispatch(addAmountToStore({ amount }));
        navigation.navigate('CashOutPin');
    };

    const amountInputRef = useRef(null);

    useEffect(() => {
        if (amountInputRef.current) {
            amountInputRef.current.focus();
        }
    }, []);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.navInfo}>
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
                <Text style={styles.title}>Cash Out</Text>
                <Icon name="ellipsis-vertical" style={styles.arrowIcon} ></Icon>
            </View>
            <ScrollView>
                <View style={styles.containerTop}>
                    <Text style={styles.receiverPhoneTitle}>Recipient</Text>
                    <View style={styles.flexContainer}>
                        <TouchableOpacity style={styles.buttonZero}>
                            <Text style={styles.buttonZeroText}>0</Text>
                        </TouchableOpacity>
                        <Text style={styles.receiverPhone}>{receiverphone}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.receiverPhoneTitle}>Amount</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, amount ? styles.inputTextRed : {}]}
                            placeholder="ট 0"
                            value={`ট ${amount}`}
                            onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ''))} // Only allow numeric input
                            keyboardType="numeric"
                            ref={amountInputRef}
                            placeholderTextColor="#071B17" 
                            textAlign="center"
                        />
                    </View>
                    <Text style={{alignItems: 'center', fontSize: 12}}>Available balance {user?.amount}.00</Text>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={[styles.button, isAmountValid ? styles.buttonActive : styles.buttonInactive]}
                onPress={handleStore}
                disabled={!isAmountValid}
            >
                <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CashOutAmount;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#e6e6e9',
        height: '100%'
    },
    navInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#071B17',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 100,
        paddingTop: 20
    },
    arrowIcon: {
        color: 'white',
        fontSize: 20,
    },
    title: {
        color: 'white',
        fontSize: 18,
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
    container: {
        flex: 1,
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
        backgroundColor: '#071B17',
        borderRadius: 5,
    },
    buttonZeroText: {
        color: 'white',
        fontSize: 16,
    },
    receiverPhone: {
        fontSize: 12,
        flex: 1,
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
        fontSize: 36,
    },
    inputTextRed: {
        color: '#071B17', 
        fontSize: 20,
        fontWeight: '500'
    },
    button: {
        height: 48,
        borderColor: '#071B17',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#071B17',
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
