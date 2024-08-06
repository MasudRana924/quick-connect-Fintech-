import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import bongoImg from '../../../assets/bongo.webp';
import bingeImg from '../../../assets/binge.png';
import hoichoiImg from '../../../assets/hoichoi.jpg';
import bioscopeImg from '../../../assets/bioscope.jpg';
import tofeeImg from '../../../assets/toffee.jpg';
import chorkiImg from '../../../assets/chorki.png';
import moreImg from '../../../assets/more.png';
import { useNavigation } from '@react-navigation/native';

const Entertainment = () => {
  const navigation = useNavigation();

  const services = [
    { id: '1', title: 'Bongo', img: bongoImg },
    { id: '2', title: 'Hoichoi', img: hoichoiImg },
    { id: '3', title: 'Binge', img: bingeImg },
    { id: '4', title: 'Chorki', img: chorkiImg },
    { id: '5', title: 'Bioscope', img: bioscopeImg },
    { id: '6', title: 'Toffee', img: tofeeImg },
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
      <Text style={styles.Title}>Entertainment</Text>
      <FlatList
        data={servicesWithPlaceholders}
        renderItem={({ item }) => item.placeholder ? <View style={[styles.gridItem, styles.placeholderItem]} /> : renderItem({ item })}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
}

export default Entertainment;

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
    marginBottom: 6,
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
