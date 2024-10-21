import React, { useState } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const TransactionsList = () => {
  
    const areaData = [
        { value: 50, label: 'Jan' },
        { value: 80, label: 'Feb' },
        { value: 60, label: 'Mar' },
        { value: 90, label: 'Apr' },
        { value: 70, label: 'May' },
        { value: 100, label: 'Jun' },
      ];

    return (
        <View style={styles.container}>
   <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: "#3a86ff",
          backgroundGradientFrom: "#3a86ff",
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
            stroke: "#3a86ff",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000814',
        padding: 16,
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 8,
    },
    content: {
        flex: 1,
    },
    card: {
        padding: 16,
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        padding: 8,
    },
    dateText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 8,
    },
    infoLabel: {
        fontSize: 14,
        color: '#333',
    },
    infoValue: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
    },
    typesContainer: {
        marginTop: 16,
    },
    typeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 8,
    },
    typeText: {
        fontSize: 14,
        color: '#333',
    },
    amountText: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TransactionsList;
