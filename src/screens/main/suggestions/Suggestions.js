import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import bikroyImg from '../../../assets/bikroy.png';
import darazImg from '../../../assets/daraz.png';
import tofeeImg from '../../../assets/toffee.jpg';
import bdJobsImg from '../../../assets/bdjobs.jpg';
import skillJobsImg from '../../../assets/skilljobs.png';
import tenImg from '../../../assets/10.png';
const Suggestions = () => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.suggestionsContainer}>
                <Text style={styles.suggestionsText}>Suggestions</Text>
                <TouchableOpacity style={styles.seeAllButton}>
                    <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.gridContainer}>
                        <View style={styles.gridItem}>
                            <Image source={bikroyImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Bikroy</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={darazImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Daraz</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={tofeeImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Toffee</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={bdJobsImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Bd Jobs</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={skillJobsImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Skill Jobs</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={tenImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Ten </Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={bikroyImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Bikroy</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={darazImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Daraz</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={tofeeImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Toffee</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={bdJobsImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Bd Jobs</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={skillJobsImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Skill Jobs</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Image source={tenImg} style={styles.imageIcon} />
                            <Text style={styles.title}>Ten </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Suggestions;
const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        height: 150,
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 5,
        marginTop:40,
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
    },
    suggestionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginBottom: 5,
    },
    suggestionsText: {
        fontSize: 14,
    },
    seeAllButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    seeAllText: {
        color: 'black',
    },
    gridContainer: {
        flexDirection: 'row',
    },
    gridItem: {
        marginRight: 10,
        alignItems: 'center',
    },
    imageIcon: {
        width: 50,
        height: 50,
    },
    title: {
        marginTop: 5,
        textAlign: 'left',
    },
});