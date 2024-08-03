import {SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Services from '../main/Services';
import Offer from '../main/offer/Offer';
import Suggestions from '../main/suggestions/Suggestions';
import Payment from '../main/payment/Payment';
import Education from '../main/education/Education';
import Entertainment from '../main/Entertainment/Entertainment';
import Sports from '../main/sports/Sports';
import Shopping from '../main/shopping/Shopping';
import Tickets from '../main/tickets/Tickets';

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
        <Services />
        <Payment/>
        <Education/>
        <Entertainment/>
        <Sports/>
        <Shopping/>
        <Tickets/>
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