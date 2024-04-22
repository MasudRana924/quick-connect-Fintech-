import {ActivityIndicator, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

const MyButton = ({title, isLoading,onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {isLoading && <ActivityIndicator size="small" color={'white'} />}
    </Pressable>
  );
};
export default MyButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef2d56',
    borderRadius: 5,
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});