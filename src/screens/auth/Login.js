import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import MyButton from '../components/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import BirdIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { MaterialIcons } from '@expo/vector-icons';


const Login = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
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
    if (phone && password) {
      setIsButtonDisabled(false); // Enable button if both fields are filled
    } else {
      setIsButtonDisabled(true);  // Disable button if either field is empty
    }
  }, [phone, password]);
  useEffect(() => {
    if (error) {
      showMessage({
        message: error,
        // type: "danger", 
        backgroundColor: "red",
        color: "#fff",
        style: styles.toast,
      });
    }
  }, [error]);
  return (
    <View style={styles.container}>
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
      <Text style={styles.title}>QuickPay</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        <TouchableOpacity >
          <Icon
            style={{ color: '#3a86ff', fontSize: 20 }}
            name="scan"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>


      <TextInput
        value={phone}
        placeholder="Account Number"
        onChangeText={setPhone}
        style={styles.input}
        placeholderTextColor="grey"
        // autoCapitalize="none"
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
        secureTextEntry={true}
        onFocus={() => setIsInputFocused(true)} // Update focus state
        onBlur={() => setIsInputFocused(false)}  // Reset focus state
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.forgotText}>Forgot Pin?</Text>
      </TouchableOpacity>
      {/* <MyButton isLoading={isLoading} title="Login" onPress={handlingLogin} /> */}
      <MyButton title="Login" onPress={handlingLogin} />
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
      {/* <Toast /> */}
      <FlashMessage position="top" />

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
    color: '#3a86ff',
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
    color: '#3a86ff',
  },
  toast: {
    width: '100%',
    padding: 25,
    // borderRadius: 5,
    marginTop: 30,
    height: 70,
    textAlign: 'center'
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
  input: {
    height: 50,
    // borderWidth: 2,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderBottomColor: '#E5E8E8',
    // backgroundColor: '#E5E8E8',
    // paddingHorizontal: 10,
  },
  forgotText: {
    textAlign: 'left',
    fontSize: 14,
    color: '#3a86ff',
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
    color: '#3a86ff',
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
    color: '#3a86ff',
    fontSize: 12,
    fontWeight: '500',
  },
  grayText: {
    color: 'gray',
  },
});
