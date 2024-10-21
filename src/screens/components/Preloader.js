import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const Preloader = () => {
    const navigation = useNavigation();

    useEffect(() => {
      const timer = setTimeout(() => {
        // After 2 seconds, navigate to the "root" route (TabNavigation)
        navigation.replace('root');
      }, 2000); // 2 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer
    }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        source={require('../../assets/preloader.json')} // Replace with your own animation file
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.loadingText}>Quick Pay</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Pink background
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 150,
    height: 150,
  },
  loadingText: {
    fontSize: 22,
    color: '#3a86ff',
  },
});

export default Preloader;
