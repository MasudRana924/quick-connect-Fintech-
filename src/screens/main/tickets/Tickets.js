import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import moreImg from '../../../assets/more.png';
import railwayImg from '../../../assets/railway.jpg';
import shohojImg from '../../../assets/railway.jpg';
import jatriImg from '../../../assets/jatri.jpeg';
const Tickets = () => {
  return (

    <View style={styles.container}>
          <Text style={styles.Title}>Tickets</Text>
          <View style={styles.gridContainer}>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={railwayImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Railway</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('CashOut')}>
                  <Image source={shohojImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Shohoj</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={jatriImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Jatri</Text>
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

export default Tickets;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: '#e9ecef', // Set the border color
        borderBottomWidth: 1,
        marginTop: 10,
    },
    Title:{
        marginHorizontal: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: 10,
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