import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import bikroyImg from '../../../assets/bikroy.png';
import darazImg from '../../../assets/daraz.png';
import evalyImg from '../../../assets/evaly.jpg';
import moreImg from '../../../assets/more.png';
const Shopping = () => {
  return (

    <View style={styles.container}>
          <Text style={styles.Title}>Shopping</Text>
          <View style={styles.gridContainer}>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={darazImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Daraz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('CashOut')}>
                  <Image source={evalyImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Evaly</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                  <Image source={bikroyImg} style={styles.imageIcon} />
                  <Text style={styles.title}>Bikroy</Text>
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

export default Shopping;

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