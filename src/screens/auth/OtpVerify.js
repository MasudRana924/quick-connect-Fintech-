import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const OtpVerify = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };

    const [otpString, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const inputRefs = useRef([]);

    useEffect(() => {
        const savedEndTime = localStorage.getItem("otpEndTime");
        if (savedEndTime) {
            const endTime = new Date(savedEndTime);
            const currentTime = new Date();
            const diff = Math.ceil((endTime - currentTime) / 1000);
            if (diff > 0) {
                setTimer(diff);
                // setCanResend(false);
            } else {
                setTimer(0);
                // setCanResend(true);
            }
        }
    }, []);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            // setCanResend(true);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleResend = () => {
        const newEndTime = new Date(new Date().getTime() + 60 * 1000);
        localStorage.setItem("otpEndTime", newEndTime);
        setTimer(60);
        //  setCanResend(false);
    };

    const handleChange = (index, value) => {
        if (/^[0-9a-zA-Z]$/.test(value) || value === "") {
            const newOtp = [...otpString];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < otpString.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otp = otpString.join("");
        if (otp) {
            dispatch(verifyOTP({ email, otp }));
        }
    };

    return (
        <View style={styles.container}>
            <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack} />
            <Text style={styles.title}>Verify</Text>
            <Text style={styles.subTitle}>We have sent verificaion code in your phone</Text>
            <View style={styles.inputContainer}>
                {otpString.map((digit, index) => (
                    <TextInput
                        key={index}
                        maxLength={1}
                        value={digit}
                        onChangeText={(value) => handleChange(index, value)}
                        placeholderTextColor="grey"
                        keyboardType="numeric"
                        style={[styles.input, digit && styles.inputWithText]}
                        ref={(ref) => inputRefs.current[index] = ref}
                    />
                ))}
            </View>

            <Pressable
                style={styles.button}
                // onPress={handleRegister}
                className=" font-semibold text-2xl"
            >
                <Text style={styles.buttonText}>Verify</Text>
                {/* {isLoading && <ActivityIndicator size="small" color={'white'} />} */}
            </Pressable>
        </View>
    );
};

export default OtpVerify;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        paddingTop: 50,
        paddingHorizontal: '5%',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'start',
    },
    subTitle: {
        fontSize: 10,
        color: 'gray',
        fontWeight: 'semibold',
        textAlign: 'start',
        marginBottom: 5,
    },
    arrowIcon: {
        color: '#ff006e',
        fontSize: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 13,
        marginTop: 20,
        width: '100%',
    },
    input: {
        height: 45,
        width: 45,
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        color: 'gray',
        borderColor: '#E5E8E8',
        backgroundColor: '#E5E8E8',
    },
    inputWithText: {
        color: '#ff006e',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#ff006e',
        borderRadius: 5,
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
