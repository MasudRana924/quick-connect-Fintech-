import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import moreImg from '../../../assets/more.png';
import railwayImg from '../../../assets/railway.jpg';
import shohojImg from '../../../assets/railway.jpg';
import jatriImg from '../../../assets/jatri.jpeg';
import { useNavigation } from '@react-navigation/native';

const Tickets = () => {
  const navigation = useNavigation();

  const services = [
    { id: '1', title: 'Railway', img: railwayImg },
    { id: '2', title: 'Shohoj', img: shohojImg },
    { id: '3', title: 'Jatri', img: jatriImg },
    { id: '4', title: 'More', img: moreImg },
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
      <Text style={styles.Title}>Tickets</Text>
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

export default Tickets;

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
    height: 40,
    width: 40,
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
