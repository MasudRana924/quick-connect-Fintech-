import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CashOutNumber = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const [receiverPhone, setReceiverPhone] = useState('');
    const handleStore = () => {
        // Your logic for handling store
    };
    return (
        <SafeAreaView>
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
                            value={receiverPhone}
                            onChangeText={setReceiverPhone}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity
                            style={[styles.button, receiverPhone.length === 11 ? styles.buttonActive : styles.buttonInactive]}
                            onPress={handleStore}
                            disabled={receiverPhone.length !== 11}
                        >
                            <Icon name="arrow-forward" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.helperText}>Enter 11 digit agent number</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CashOutNumber;
const styles = StyleSheet.create({
    navInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ef2d56',
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
    },
    button: {
        width: 48,
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ef2d56', // Set button color here
    },
    buttonActive: {
        backgroundColor: '#ef2d56',
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
