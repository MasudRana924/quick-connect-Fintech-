import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Transaction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noTransactionText}>No Transaction</Text>
      <Text style={styles.transactionInfoText}>Transaction will appear here</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTransactionText: {
    color: 'red',
  },
  transactionInfoText: {
    color: 'gray',
    marginTop:10
  },
});
