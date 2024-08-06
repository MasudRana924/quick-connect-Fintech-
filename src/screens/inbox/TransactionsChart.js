import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLastThreeMonthsTransactions } from '../../redux/reducers/transactions/myTransactionSlice';

const TransactionsChart = () => {
    const dispatch = useDispatch();
    const { transactions } = useSelector((state) => state.transactions.transactionsHistry);
    const { token } = useSelector(state => state.auth.userData);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (token) {
            dispatch(fetchLastThreeMonthsTransactions({ token }));
        }
    }, [dispatch, token]);

    const handleNext = () => {
        if (currentIndex < transactions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentTransaction = transactions[currentIndex] || {};

    return (
        <View style={styles.container}>
            {transactions?.length > 0 ? (
                <View style={styles.chart}>
                    <Text>Month: {currentTransaction.month}</Text>
                    <Text>Year: {currentTransaction.year}</Text>
                    <Text>Total Amount: {currentTransaction.totalAmount}</Text>
                    <Text>Total Transactions: {currentTransaction.totalTransactions}</Text>
                    <Text>Start Balance: {currentTransaction.startBalance}</Text>
                    <Text>End Balance: {currentTransaction.endBalance}</Text>
                </View>
            ) : (
                <Text>No transaction data available.</Text>
            )}
            <View style={styles.buttonsContainer}>
                <Button title="Previous" onPress={handlePrevious} disabled={currentIndex === 0} />
                <Button title="Next" onPress={handleNext} disabled={currentIndex === transactions.length - 1} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
        padding: 16,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
});

export default TransactionsChart;
