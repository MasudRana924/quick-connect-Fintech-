import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'

export default function Education() {
  return (

      <View style={styles.container}>
            <Text>Education Fee</Text>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    {/* <Image source={sendImg} style={styles.moneyIcon} /> */}
                    <Text style={styles.title}>School</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('CashOut')}>
                    {/* <Image source={cashOutImg} style={styles.moneyIcon} /> */}
                    <Text style={styles.title}>College</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    {/* <Image source={rechargeImg} style={styles.moneyIcon} /> */}
                    <Text style={styles.title}>University</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    {/* <Image source={addMoneyImg} style={styles.moneyIcon} /> */}
                    <Text style={styles.title}>Training</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    {/* <Image source={savingsImg} style={styles.moneyIcon} /> */}
                    <Text style={styles.title}>E-lerning</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    {/* <Image source={loanImg} style={styles.moneyIcon} /> */}
                    <Text style={styles.title}>Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    {/* <Image source={moreImg} style={styles.moneyIcon} /> */}
                    <Text style={styles.title}>More</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}


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
    moneyIcon: {
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