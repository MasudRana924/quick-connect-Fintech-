import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
];

const PaymentCategory = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const renderGridItem = (item) => (
        <View key={item.id} style={styles.gridItem}>
            <Text>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.gridContainer}>
                {DATA.slice(0, showAll ? DATA.length : 4).map(renderGridItem)}
            </View>
            {!showAll && DATA.length > 4 && (
                <TouchableOpacity onPress={toggleShowAll} style={styles.button}>
                    <Text>Show More</Text>
                </TouchableOpacity>
            )}
            {showAll && (
                <TouchableOpacity onPress={toggleShowAll} style={styles.button}>
                    <Text>Hide</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default PaymentCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', 
    },
    gridItem: {
        backgroundColor: '#DDDDDD',
        margin:5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '22%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});
