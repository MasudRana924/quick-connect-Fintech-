import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { createTakePassword } from '../../redux/reducers/transactions/takePasswordSlice';
import { addPasswordToStore } from '../../redux/reducers/transactions/sendSlice';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import LottieView from 'lottie-react-native';
const CashOutPin = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { receiverphone } = useSelector((state) => state.type);
    const { token } = useSelector(state => state.auth.userData);
    const { amount } = useSelector(state => state.type.amount);
    const [password, setPassword] = useState('');
    const isPinValid = password.length === 5; // Assuming pin is valid with 5 digits
    const data = { password };

    const handleStore = () => {
        dispatch(createTakePassword({ data, token }));
        dispatch(addPasswordToStore({ password }));
    };

    const { success, errorr, isLoading } = useSelector(
        (state) => state.takePassword
    );

    useEffect(() => {
        if (success) {
            navigation.navigate('CashOutConfirm');
        } else if (errorr) {
            showMessage({
                message:'Wrong Pin',
                backgroundColor: "red",
                color: "#fff",
                style: styles.toast,
            });
        }
    }, [success, navigation, errorr]);

    const handleKeyPress = (key) => {
        if (key === 'clear') {
            setPassword(password.slice(0, -1));
        } else if (password.length < 5) {
            setPassword(password + key);
        }
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
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={navigation.goBack} />
                <Text style={styles.title}>Cash Out</Text>
                <Icon name="ellipsis-vertical" style={styles.arrowIcon} />
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
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        {/* Display asterisks instead of actual numbers */}
                        <TextInput
                            style={[styles.inputTextRed, { textAlign: 'center' }]}
                            editable={false}
                            pointerEvents="none"
                            secureTextEntry={true}
                            value={password }
                            placeholder="Enter Pin"
                        />
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={[styles.button, isPinValid ? styles.buttonActive : styles.buttonInactive]}
                onPress={handleStore}
                disabled={!isPinValid}
            >
                <Text style={styles.buttonText}>Confirm Pin</Text>
                <Icon name="arrow-forward" style={styles.buttonText}></Icon>
            </TouchableOpacity>
            {/* Custom Keyboard */}
            <View style={styles.customKeyboard}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((key) => (
                    <TouchableOpacity
                        key={key}
                        style={styles.key}
                        onPress={() => handleKeyPress(key)}
                    >
                        <Text style={styles.keyText}>{key}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={styles.key}
                    onPress={() => handleKeyPress('<')}
                >
                    <Icon name="arrow-back" size={30} color="#6c757d" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.key}
                    onPress={() => handleKeyPress('clear')}
                >
                    <Icon name="backspace" size={30} color="#6c757d" />
                </TouchableOpacity>
            </View>

            <FlashMessage position="top" />
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
        backgroundColor: '#3a86ff',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 70,
        // paddingTop: 10
    },
    toast: {
        width: '100%',
        padding: 55,
        height: 70,
        textAlign: 'center'
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
        fontSize: 80,
        color: '#3a86ff',
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
        // backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        fontSize: 80,
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
        backgroundColor: '#3a86ff',
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
    content: {
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
        height:120
    },
    inputContainer: {
        marginTop: 20,
        paddingBottom: 20,
        width: '100%',
    },
    inputTextRed: {
        fontSize: 24,
        color: '#3a86ff',
        fontWeight: '700',
        padding: 10,
    },
    customKeyboard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    key: {
        width: '30%',
        margin: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyText: {
        color: '#6c757d',
        fontSize: 30,
    },
    button: {
        height: 48,
        borderColor: '#3a86ff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3a86ff',
        paddingLeft: 5,
        paddingRight: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    buttonActive: {
        opacity: 1,
    },
    buttonInactive: {
        backgroundColor: 'gray',
        color: 'white',
    },
});
