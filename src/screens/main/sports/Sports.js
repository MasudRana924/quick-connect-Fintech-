import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import rabbitImg from '../../../assets/rabbithole.webp';
import tsportsImg from '../../../assets/t-sports.jpg';
import moreImg from '../../../assets/more.png';
const Sports = () => {
  return (

    <View style={styles.container}>
          <Text>Sports</Text>
          <View style={styles.gridContainer}>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={rabbitImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Rabbithole</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('CashOut')}>
                  <Image source={tsportsImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Tsports</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={moreImg} style={styles.imageIcon} />
                  <Text style={styles.title}>More</Text>
              </TouchableOpacity>
          </View>
          {/* <View style={styles.gridContainer}>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={savingsImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Bioscope</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={loanImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Toffee</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={moreImg} style={styles.imageIcon} />
                  <Text style={styles.title}>More</Text>
              </TouchableOpacity>
          </View> */}
  </View>
  )
}

export default Sports;

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