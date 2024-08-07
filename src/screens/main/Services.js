import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import sendImg from '../../assets/taka (5).png';
import cashOutImg from '../../assets/taka (6).png';
import rechargeImg from '../../assets/money.png';
import paymentImg from '../../assets/add-cart.png';
import addMoneyImg from '../../assets/wallet.png';
import loanImg from '../../assets/salary.png';
import savingsImg from '../../assets/approved.png';
import moreImg from '../../assets/app.png';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
const Services = () => {
    const navigation = useNavigation();

    const services = [
        { id: '1', title: 'Send Money', img: sendImg },
        { id: '2', title: 'Cash Out', img: cashOutImg, navigate: 'CashOut' },
        { id: '3', title: 'Recharge', img: rechargeImg },
        { id: '4', title: 'Add Money', img: addMoneyImg },
        { id: '5', title: 'Savings', img: savingsImg },
        { id: '6', title: 'Loan', img: loanImg },
        { id: '7', title: 'Payment', img: paymentImg },
        { id: '8', title: 'More', img: moreImg },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={() => item.navigate && navigation.navigate(item.navigate)}
        >
            <Image source={item.img} style={styles.moneyIcon} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    const numColumns = 3;
    const numRows = Math.ceil(services.length / numColumns);

    // Add placeholder items if necessary
    const servicesWithPlaceholders = [...services];
    while (servicesWithPlaceholders.length % numColumns !== 0) {
        servicesWithPlaceholders.push({ id: `placeholder-${servicesWithPlaceholders.length}`, placeholder: true });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Services</Text>
            <FlatList
                data={servicesWithPlaceholders}
                renderItem={({ item }) => item.placeholder ? <View style={[styles.gridItem, styles.placeholderItem]} /> : renderItem({ item })}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                contentContainerStyle={styles.gridContainer}
            />
        </View>
    );
};

export default Services;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'white',
        width: '100%',
    },
    Title: {
        marginHorizontal: 20,
        fontSize: 14,
        fontWeight: '500',
        marginBottom:6,
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5'
    },
    gridContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        minWidth: 0, // Ensure items don't stretch unnecessarily
    },
    placeholderItem: {
        backgroundColor: 'transparent',
    },
    moneyIcon: {
        height: 40,
        width: 40,
        marginBottom: 6,
    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        color: '#000000',
        marginTop: 10,
        fontWeight: '500',
    },
});
