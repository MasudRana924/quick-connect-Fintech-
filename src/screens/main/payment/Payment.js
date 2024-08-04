import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import electricityImg from '../../../assets/innovation.png';
import gasImg from '../../../assets/gas.png';
import waterImg from '../../../assets/faucet.png';
import tvImg from '../../../assets/television.png';
import internetImg from '../../../assets/internet.png';
import phoneImg from '../../../assets/telephone.png';
import moreImg from '../../../assets/more.png';
const Payment = () => {
  return (
  
      <View style={styles.container}>
            <Text style={styles.Title}>Pay Bill</Text>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={electricityImg} style={styles.imageIcon} />
                    <Text style={styles.title}>Electricity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('CashOut')}>
                    <Image source={waterImg} style={styles.imageIcon} />
                    <Text style={styles.title}>Water</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={gasImg} style={styles.imageIcon} />
                    <Text style={styles.title}>Gas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={phoneImg} style={styles.imageIcon} />
                    <Text style={styles.title}>Telephone</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={internetImg} style={styles.imageIcon} />
                    <Text style={styles.title}>Internet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={tvImg} style={styles.imageIcon} />
                    <Text style={styles.title}>TV</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={moreImg} style={styles.imageIcon} />
                    <Text style={styles.title}>More</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Payment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
        borderBottomColor: '#e9ecef', // Set the border color
        borderBottomWidth: 1,
        marginTop:10
    },
    Title:{
        marginHorizontal: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // margin: 10,
        marginTop:10,
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
