import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import bongoImg from '../../../assets/bongo.webp';
import bingeImg from '../../../assets/binge.png';
import hoichoiImg from '../../../assets/hoichoi.jpg';
import bioscopeImg from '../../../assets/bioscope.jpg';
import tofeeImg from '../../../assets/toffee.jpg';
import chorkiImg from '../../../assets/chorki.png';
import moreImg from '../../../assets/more.png';
const Entertainment = () => {
  return (

    <View style={styles.container}>
          <Text>Entertainment</Text>
          <View style={styles.gridContainer}>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={bongoImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Bongo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('CashOut')}>
                  <Image source={hoichoiImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Hoichoi</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={bingeImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Binge</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={chorkiImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Chorki</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.gridContainer}>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={bioscopeImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Bioscope</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={tofeeImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Toffee</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={moreImg} style={styles.imageIcon} />
                  <Text style={styles.title}>More</Text>
              </TouchableOpacity>
          </View>
  </View>
  )
}

export default Entertainment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // borderBottomColor: '#e9ecef', // Set the border color
        // borderBottomWidth: 2,
    },
    gridContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        margin: 10,
        gap:10,
        flexWrap: 'wrap',
    },
    gridItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20, // Add horizontal margin to create a gap
        marginVertical: 10,
    },
    imageIcon: {
        height: 30,
        width: 30,
        marginBottom: 6,
    },
    title: {
        fontSize: 12,
        textAlign: 'left',
        color:'#000000',
        marginTop:10,
        fontWeight: '500',
    },
});