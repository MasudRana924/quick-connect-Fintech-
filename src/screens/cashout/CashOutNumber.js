import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BirdIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { takeAgentNumber } from '../../redux/reducers/transactions/agentNumberSlice';
import { addPhoneToStore, addtypeToStore } from '../../redux/reducers/transactions/sendSlice';
import FlashMessage, { showMessage } from 'react-native-flash-message';
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
        dispatch(takeAgentNumber({ data, token }));
        dispatch(addPhoneToStore({ receiverphone, senderphone }));
        dispatch(addtypeToStore({ type, receiverType }));
    };

    const { success, errorr, isLoading } = useSelector((state) => state.takeAgentNumber);

    useEffect(() => {
        if (success) {
            navigation.navigate('CashOutAmount');
        }
        if (errorr) {
            showMessage({
                // message: errorr,
                message: 'This is not a agent number',
                // type: "danger", 
                backgroundColor: "red",
                color: "#fff",
                style: styles.toast,
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
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack} />
                <Text style={styles.title}>Cash Out</Text>
                <Icon name="ellipsis-vertical" style={styles.arrowIcon} />
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
                    <TouchableOpacity style={styles.scanButton}>
                        <Icon style={styles.scanIcon} name="scan" size={24} />
                        <Text style={styles.scanText}>Tap to scan QR code</Text>
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
                                    const phoneNumber = item.phoneNumbers[0]?.number;
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
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleStore}
                disabled={receiverphone.length !== 11}
            >
                <Text style={styles.buttonText}>Proceed</Text>
                <Icon name="arrow-forward" style={styles.buttonText} />
            </TouchableOpacity>
            <FlashMessage position="top" />
        </SafeAreaView>
    );
};

export default CashOutNumber;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        height: '100%',
    },
    toast: {
        width: '100%',
        padding: 25,
        // borderRadius: 5,
        marginTop: 30,
        height: 70,
        textAlign: 'center'
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
    birdIcon: {
        fontSize: 80,
        color: '#ff006e',
        height: 100,
        width: 100,
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
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
    title: {
        color: 'white',
        fontSize: 20,
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
        height: 50,
    },
    scanButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ff006e',
        marginTop: 8,
        borderRadius: 8,
        width: '100%',
        height: 44,
    },
    scanIcon: {
        color: '#ff006e',
        fontSize: 20,
    },
    scanText: {
        color: '#ff006e',
        fontSize: 14,
        marginLeft: 10,
    },
    button: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ff006e',
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
    contactTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
    },
    contactItem: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        gap: 10,
    },
    contactButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactName: {
        fontWeight: '500',
        fontSize: 18,
    },
    phoneNumbers: {
        marginTop: 5,
    },
    contactList: {
        flex: 1,
    },
})