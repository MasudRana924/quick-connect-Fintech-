import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import electricityImg from '../../../assets/innovation.png';
import gasImg from '../../../assets/gas.png';
import waterImg from '../../../assets/faucet.png';
import tvImg from '../../../assets/television.png';
import internetImg from '../../../assets/internet.png';
import phoneImg from '../../../assets/telephone.png';
import moreImg from '../../../assets/more.png';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();

  const services = [
    { id: '1', title: 'Electricity', img: electricityImg },
    { id: '2', title: 'Water', img: waterImg },
    { id: '3', title: 'Gas', img: gasImg },
    { id: '4', title: 'Telephone', img: phoneImg },
    { id: '5', title: 'Internet', img: internetImg },
    { id: '6', title: 'TV', img: tvImg },
    { id: '7', title: 'More', img: moreImg },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => item.navigate && navigation.navigate(item.navigate)}
    >
      <Image source={item.img} style={styles.imageIcon} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const numColumns = 3;

  // Add placeholder items if necessary
  const servicesWithPlaceholders = [...services];
  while (servicesWithPlaceholders.length % numColumns !== 0) {
    servicesWithPlaceholders.push({ id: `placeholder-${servicesWithPlaceholders.length}`, placeholder: true });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Pay Bill</Text>
      <FlatList
        data={servicesWithPlaceholders}
        renderItem={({ item }) => item.placeholder ? <View style={[styles.gridItem, styles.placeholderItem]} /> : renderItem({ item })}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  Title: {
    marginHorizontal: 20,
    fontSize: 14,
    fontWeight: '500',
    marginBottom:6,
    paddingTop:10
  },
  gridContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  gridItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    minWidth: 0, // Ensure items don't stretch unnecessarily
  },
  placeholderItem: {
    backgroundColor: 'transparent',
  },
  imageIcon: {
    height: 30,
    width: 30,
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    marginTop: 10,
    fontWeight: '500',
  },
});
