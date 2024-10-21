import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { clearCreateAccountState, createAccount } from '../../redux/reducers/auth/registerSlice';
import Toast from 'react-native-toast-message';
const Register = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isCreated, isLoading } = useSelector(state => state.register);
    const handleRegister = () => {
        const params = {
            phone: phone,
            password: password,
        };
        navigation.navigate('Otp-Verify');
        // dispatch(createAccount(params));
    };
    useEffect(() => {
        if (isCreated) {
            Toast.show({
                type: 'success',
                text1: 'Your account successfully created.',
                position: 'top',
                duration: 2000,
                animationDuration: 250,
            });
            const timerId = setTimeout(() => {
                dispatch(clearCreateAccountState());
                navigation.navigate('Login');
            }, 1000);
            return () => clearTimeout(timerId);
        }
    }, [isCreated, dispatch, navigation]);

  return (
        <View style={styles.container}>
            <Text style={styles.title}>QuickPay</Text>
            <Text style={styles.createTitle}>Create an account </Text>
            <TextInput
                value={phone}
                placeholder="Phone Number"
                onChangeText={setPhone}
                style={styles.input}
                placeholderTextColor="grey"
                autoCapitalize="none"
                keyboardType="numeric"
            />
            <TextInput
                value={password}
                placeholder="Pin"
                onChangeText={setPassword}
                style={styles.input}
                placeholderTextColor="grey"
                keyboardType="numeric"
            />
            <Pressable
                style={styles.button}
                onPress={handleRegister}
                className=" font-semibold text-2xl"
            >
                <Text style={styles.buttonText}>Register</Text>
                {isLoading && <ActivityIndicator size="small" color={'white'} />}
            </Pressable>
            <View style={styles.createContainer}>
                <Text>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Otp-Verify')}>
                    <Text style={styles.createText}> Login</Text>
                </TouchableOpacity>
            </View>
            <Toast />
        </View>
    );
};

export default Register;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        paddingTop: 200,
        paddingHorizontal: '5%',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 26,
        color: '#3a86ff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50
    },
    createTitle: {
        fontSize: 20,
        color: 'black',
        textAlign: 'start',
        marginBottom: 5
    },
    input: {
        height: 50,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: '#E5E8E8',
        // backgroundColor:'#E5E8E8',
        // paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#3a86ff',
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
    createContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    createText: {
        marginLeft: 4,
        fontSize: 14,
        fontWeight: 'semibold',
        color: '#3a86ff'
    }
});
