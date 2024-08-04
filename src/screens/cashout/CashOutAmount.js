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
        <SafeAreaView style={styles.mainContainer}>
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
                            placeholder="ট 0"
                            value={amount}
                            onChangeText={setAmount}
                            keyboardType="numeric"
                        />
                         {/* <TouchableOpacity
                            style={[styles.button, isAmountValid ? styles.buttonActive : styles.buttonInactive]}
                            onPress={handleStore}
                            disabled={!isAmountValid}
                        >
                            <Icon name="arrow-forward" size={24} color="black" />
                        </TouchableOpacity> */}
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={handleStore}
               
            >
                <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CashOutAmount;
const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:"white",
        height:'100%'
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
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 10,
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
    helperText: {
        marginTop: 8,
        fontSize: 12,
        color: '#888',
    },
});

