import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtransactions } from '../../redux/reducers/transactions/myTransactionSlice';
import { Feather } from '@expo/vector-icons';

const Transaction = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth.userData);
  const { transactions } = useSelector(state => state.transactions.mytransactions);
  const { isLoading } = useSelector(state => state.transactions);
  const user = useSelector(state => state.auth.userData);

  useEffect(() => {
    dispatch(fetchtransactions({ token }));
  }, [dispatch, token]);

  useEffect(() => {
    console.log("Fetched transactions:", transactions);
  }, [transactions]);

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollContainer}>
      {transactions?.length > 0 ? transactions.map((transaction, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.transactionContainer}>
            <View style={styles.flexRow}>
              <View>
                {user._id === transaction.senduserId ? (
                  <Image
                    source={{ uri: transaction.receiveuserAvatar || user.avatarLogo }}
                    style={styles.avatar}
                  />
                ) : user._id === transaction.receiveuserId ? (
                  <Image
                    source={{ uri: transaction.senderuserAvatar || user.avatarLogo }}
                    style={styles.avatar}
                  />
                ) : null}
              </View>
              <View>
                {user._id === transaction.senduserId ? (
                  <View>
                    {/* <Text style={styles.textType}>{transaction.type}</Text> */}
                    <Text style={styles.textPhone}>{transaction.receiverphone}</Text>
                  </View>
                ) : null}
                {user._id === transaction.receiveuserId ? (
                  <View>
                    <Text style={styles.textType}>{transaction.receiverType}</Text>
                    <Text style={styles.textPhone}>{transaction.senderphone}</Text>
                  </View>
                ) : null}
                <View style={styles.flexRow}>
                  <Text style={styles.transactionId}>Trans ID : {transaction.tranId}</Text>
                  <Feather name="copy" size={16} color="violet" onPress={() => {/* handle copy */}} />
                </View>
                <Text style={styles.date}>{new Date(transaction.createdAt).toLocaleDateString()}</Text>
              </View>
            </View>
            <View>
              {user._id === transaction.senduserId ? (
                <Text style={styles.amountOut}>- {transaction.amount}.00TK</Text>
              ) : user._id === transaction.receiveuserId ? (
                <Text style={styles.amountIn}>+ {transaction.amount}.00TK</Text>
              ) : null}
              <Text style={styles.charge}>Charge ট 0.00</Text>
            </View>
          </View>
        </View>
      )) : (
        <View style={styles.noTransactionContainer}>
          <Text style={styles.noTransactionText}>No Transaction</Text>
          <Text style={styles.transactionInfoText}>New transaction will appear here</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  card: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    // borderBottomWidth: 1,
    // borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    padding: 2,
  },
  flexRow: {
    flexDirection: 'row',
    gap:5
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginTop: 2,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 1,
  },
  textType: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
    marginLeft: 2,
    // marginTop: 1,
  },
  textPhone: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
    marginLeft: 2,
    marginTop: 1,
  },
  transactionId: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
    marginLeft: 2,
    marginTop: 1,
  },
  date: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
    marginLeft: 2,
    marginTop: 1,
  },
  amountOut: {
    fontSize: 12,
    fontWeight: '500',
    color: 'red',
    marginTop: 2,
    textAlign: 'right',
  },
  amountIn: {
    fontSize: 12,
    fontWeight: '500',
    color: 'green',
    marginTop: 2,
    textAlign: 'right',
  },
  charge: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
    textAlign: 'right',
    marginTop: 5,
  },
  noTransactionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  noTransactionText: {
    color: 'red',
    fontSize: 16,
  },
  transactionInfoText: {
    color: 'gray',
    fontSize: 14,
    marginTop: 10,
  },
});

export default Transaction;
