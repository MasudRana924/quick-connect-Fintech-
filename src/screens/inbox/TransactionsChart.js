import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLastThreeMonthsTransactions } from '../../redux/reducers/transactions/myTransactionSlice';
import { LineChart } from 'react-native-chart-kit';

const TransactionsChart = () => {
    const dispatch = useDispatch();
    const { transactions } = useSelector((state) => state.transactions.transactionsHistry);
    const { token } = useSelector(state => state.auth.userData);
    const { isLoading } = useSelector(state => state.transactions);

    useEffect(() => {
        if (token) {
            dispatch(fetchLastThreeMonthsTransactions({ token }));
        }
    }, [dispatch, token]);

    const labels = transactions.map(transaction => transaction.month);
    const data = transactions.map(transaction => transaction.totalAmount);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Loading, please wait...</Text>
                </View>
            ) : (
                <LineChart
                    data={{
                        labels: labels, // Months as labels
                        datasets: [
                            {
                                data: data, // Total amounts for each month
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="৳"
                    yAxisSuffix=""
                    chartConfig={{
                        backgroundColor: "#E2136E",
                        backgroundGradientFrom: "#E2136E",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#E2136E",
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        margin: 5,
                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    loadingText: {
        color: 'gray',
        fontSize: 14,
        marginTop: 10,
    },
});

export default TransactionsChart;
