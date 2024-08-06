import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import moreImg from '../../../assets/application (2).png';
import schoolImg from '../../../assets/open-book.png';
import clgImg from '../../../assets/education.png';
import gradImg from '../../../assets/graduation-hat.png';
import quizImg from '../../../assets/ideas.png';
import trainingImg from '../../../assets/awareness.png';
import eLearnImg from '../../../assets/webinar.png';
import { useNavigation } from '@react-navigation/native';

export default function Education() {
  const navigation = useNavigation();

  const services = [
    { id: '1', title: 'School', img: schoolImg },
    { id: '2', title: 'College', img: clgImg },
    { id: '3', title: 'University', img: gradImg },
    { id: '4', title: 'Training', img: trainingImg },
    { id: '5', title: 'E-learning', img: eLearnImg },
    { id: '6', title: 'Quiz', img: quizImg },
    { id: '7', title: 'More', img: moreImg },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => item.navigate && navigation.navigate(item.navigate)}
    >
      <Image source={item.img} style={styles.moneyIcon} />
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
      <Text style={styles.Title}>Education Fee</Text>
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
  moneyIcon: {
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
