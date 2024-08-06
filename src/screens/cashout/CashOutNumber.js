import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { takeAgentNumber } from '../../redux/reducers/transactions/agentNumberSlice';
import { addPhoneToStore, addtypeToStore } from '../../redux/reducers/transactions/sendSlice';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Contacts from 'expo-contacts';

const CashOutNumber = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const { user, token } = useSelector(state => state.auth.userData);
    const [receiverphone, setReceiverPhone] = useState('');
    const [contacts, setContacts] = useState([]);
    const [permissionStatus, setPermissionStatus] = useState(null);
    const senderphone = user.phone;
    const type = 'Cash Out';
    const receiverType = "Received Money";
    const data = { receiverphone };

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            setPermissionStatus(status);
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });
                if (data.length > 0) {
                    setContacts(data);
                }
            }
        })();
    }, []);

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

    const getColorForLetter = (letter) => {
        const colors = {
            A: '#FF5733',
            B: '#33FF57',
            C: '#3357FF',
        };
        return colors[letter.toUpperCase()] || '#CCC';
    };

    const handleContactPress = (phoneNumber) => {
        const cleanedPhoneNumber = phoneNumber.replace('+88', '');
        setReceiverPhone(cleanedPhoneNumber);
        handleStore();
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Spinner
                visible={isLoading}
                textStyle={styles.spinnerTextStyle}
            />
            <View style={styles.navInfo}>
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
                <Text style={styles.title}>Cash Out</Text>
            </View>
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
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ced4da', marginTop: 8, borderRadius: 8, width: '100%', height: 44 }}>
                        <Icon style={{ color: '#E2136E', fontSize: 20 }} name="scan" size={24} color="white" />
                        <Text style={{ color: '#E2136E', fontSize: 14, marginLeft: 10 }}>Tap to scan QR code</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.contactTitle}>All contacts</Text>
                </View>
                {permissionStatus === 'granted' && (
                    <FlatList
                        data={contacts}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.contactItem}
                                onPress={() => {
                                    const phoneNumber = item.phoneNumbers[0]?.number; // Get the first phone number
                                    if (phoneNumber) {
                                        handleContactPress(phoneNumber);
                                    }
                                }}
                            >
                                <View style={[styles.contactButton, { backgroundColor: getColorForLetter(item.name.charAt(0)) }]}>
                                    <Text style={styles.buttonText}>{item.name.charAt(0)}</Text>
                                </View>
                                <View style={styles.contactInfo}>
                                    <Text style={styles.contactName}>{item.name}</Text>
                                    <Text style={styles.phoneNumbers}>{item.phoneNumbers.map(phone => phone.number).join(', ')}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        style={styles.contactList}
                        showsVerticalScrollIndicator={false} // Hide the scrollbar
                    />
                )}
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={handleStore}
                disabled={receiverphone.length !== 11}
            >
                <Text style={styles.buttonText}>Proceed</Text>
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
        height: 60,
        paddingTop: 10
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
    contactTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10
    },
    contactItem: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        gap: 10
    },
    contactButton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2136E',
    },
    contactName: {
        fontWeight: 'bold',
        fontSize: 14
    },
    phoneNumbers: {
        marginTop: 5,
    },
    contactList: {
        flex: 1,
    }
});
