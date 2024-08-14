import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);
  const handlingLogin = () => {
    const params = {
      phone: phone,
      password: password,
    };
    dispatch(login(params));
  };
  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: error,
        position: 'top',
        duration: 2000,
        animationDuration: 250,
      });
    }
  }, [error]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuickPay</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>
        <Icon
          style={{ color: '#071B17', fontSize: 20 }}
          name="scan"
          size={24}
          color="white"
        />
      </View>
      <TextInput
        value={phone}
        placeholder="Account Number"
        onChangeText={setPhone}
        style={styles.input}
        placeholderTextColor="grey"
        autoCapitalize="none"
        keyboardType="numeric"
        onFocus={() => setIsInputFocused(true)} // Update focus state
        onBlur={() => setIsInputFocused(false)}  // Reset focus state
      />
      <TextInput
        value={password}
        placeholder="Pin"
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="grey"
        keyboardType="numeric"
        onFocus={() => setIsInputFocused(true)} // Update focus state
        onBlur={() => setIsInputFocused(false)}  // Reset focus state
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.forgotText}>Forgot Pin?</Text>
      </TouchableOpacity>
      <MyButton isLoading={isLoading} title="Login" onPress={handlingLogin} />
      <View style={styles.createContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createText}> Create new</Text>
        </TouchableOpacity>
      </View>
      {!isInputFocused && ( // Conditionally render the termsContainer
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By proceeding you agree</Text>
          <Text>
            <Text style={styles.redText}>terms</Text>, <Text style={styles.redText}>conditions</Text> <Text style={styles.grayText}>and</Text> <Text style={styles.redText}>policy</Text>
          </Text>
        </View>
      )}
      <Toast />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 130,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 26,
    color: '#071B17',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginTitle: {
    fontSize: 20,
    color: 'black',
  },
  qrText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#071B17',
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: '#E5E8E8',
    backgroundColor: '#E5E8E8',
    paddingHorizontal: 20,
  },
  forgotText: {
    textAlign: 'left',
    fontSize: 14,
    color: '#071B17',
  },
  createContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  createText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#071B17',
  },
  termsContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 15,
  },
  termsText: {
    color: 'gray',
    textAlign: 'left',
    fontSize: 12,
  },
  redText: {
    color: '#071B17',
    fontSize: 12,
    fontWeight: '500',
  },
  grayText: {
    color: 'gray',
  },
});
