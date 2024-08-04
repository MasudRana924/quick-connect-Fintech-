import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import moreImg from '../../../assets/application (2).png';
import schoolImg from '../../../assets/open-book.png';
import clgImg from '../../../assets/education.png';
import gradImg from '../../../assets/graduation-hat.png';
import quizImg from '../../../assets/ideas.png';
import trainingImg from '../../../assets/awareness.png';
import eLearnImg from '../../../assets/webinar.png';
export default function Education() {
  return (

      <View style={styles.container}>
            <Text style={styles.Title}>Education Fee</Text>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={schoolImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>School</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('CashOut')}>
                    <Image source={clgImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>College</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={gradImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>University</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={trainingImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Training</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={eLearnImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>E-lerning</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={quizImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={moreImg} style={styles.moneyIcon} />
                    <Text style={styles.title}>More</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}


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