import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import bikroyImg from '../../../assets/bikroy.png';
import darazImg from '../../../assets/daraz.png';
import evalyImg from '../../../assets/evaly.jpg';
import moreImg from '../../../assets/more.png';
import { useNavigation } from '@react-navigation/native';

const Shopping = () => {
  const navigation = useNavigation();

  const services = [
    { id: '1', title: 'Daraz', img: darazImg },
    { id: '2', title: 'Evaly', img: evalyImg },
    { id: '3', title: 'Bikroy', img: bikroyImg },
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
      <Text style={styles.Title}>Shopping</Text>
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

export default Shopping;

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
