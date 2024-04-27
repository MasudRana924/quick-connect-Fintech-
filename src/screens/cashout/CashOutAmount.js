import React, { useEffect, useState } from 'react';
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
    const { receiverphone} = useSelector(
        (state) => state.type.receiverphone
    );
    const [amount, setAmount] = useState();
    const isAmountValid = !!amount;
    const handleStore = () => {
        dispatch(addAmountToStore({ amount }));
        navigation.navigate('CashOutPin');

    };
    return (
        <SafeAreaView>
            <View style={styles.navInfo}>
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
                <Text style={styles.title}>Cash Out</Text>
            </View>
            <ScrollView>
            <View style={styles.container}>
                    <Text style={styles.receiverPhoneTitle}>To</Text>
                    <Text style={styles.receiverPhone}>Account Number {receiverphone}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Amount "
                            value={amount}
                            onChangeText={setAmount}
                            keyboardType="numeric"
                        />
                         <TouchableOpacity
                            style={[styles.button, isAmountValid ? styles.buttonActive : styles.buttonInactive]}
                            onPress={handleStore}
                            disabled={!isAmountValid}
                        >
                            <Icon name="arrow-forward" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CashOutAmount;
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

