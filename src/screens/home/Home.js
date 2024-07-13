import {SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import PaymentCategory from '../main/PaymentCategory';
import Offer from '../offer/Offer';
import Suggestions from '../suggestions/Suggestions';

const Home = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllProducts());
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <PaymentCategory />
        {/* <Offer/> */}
        {/* <Suggestions/> */}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    marginTop: 10,
  },
  cardBox: {
    marginBottom: 30,
    paddingBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});