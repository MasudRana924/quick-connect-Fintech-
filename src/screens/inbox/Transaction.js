import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtransactions } from '../../redux/reducers/transactions/myTransactionSlice';
import { Feather } from '@expo/vector-icons';

const Transaction = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth.userData);
  const { transactions } = useSelector(state => state.transactions.mytransactions);
  const { isLoading } = useSelector(state => state.transactions);
  const user = useSelector(state => state.auth.userData.user);
  useEffect(() => {
    dispatch(fetchtransactions({ token }));
  }, [dispatch, token]);
  const renderItem = ({ item: transaction }) => (
    <View style={styles.card}>
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
                <Text style={styles.textType}>{transaction.type}</Text>
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
              {/* <Feather name="copy" size={16} color="violet" onPress={() => handle copy} /> */}
            </View>
           
          </View>
        </View>
        <View>
          {user._id === transaction.senduserId ? (
            <Text style={styles.amountOut}>- {transaction.amount}.00TK</Text>
          ) : user._id === transaction.receiveuserId ? (
            <Text style={styles.amountIn}>+ {transaction.amount}.00TK</Text>
          ) : null}
          <Text style={styles.charge}>Charge ট 0.00</Text>
          <Text style={styles.date}>{new Date(transaction.createdAt).toLocaleDateString()}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
       {isLoading ? (
        <View style={styles.noTransactionContainer}>
          <Text style={styles.transactionInfoText}>Loading, please wait...</Text>
        </View>
      ) : transactions?.length > 0 ? (
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContentContainer}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.noTransactionContainer}>
          <Text style={styles.noTransactionText}>No Transaction</Text>
          <Text style={styles.transactionInfoText}>New transaction will appear here</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e6e6e9',
  },
  listContentContainer: {
    paddingBottom: 20,
  },
  list: {
    width: '100%',
  },
  card: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f9f9f9',
     borderBottomWidth:1,
        borderBottomColor:'#e5e5e5'
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    padding: 2,
  },
  flexRow: {
    flexDirection: 'row',
    gap: 5,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginTop: 8,
    padding: 1,
  },
  textType: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
    marginLeft: 2,
    marginTop: 1,
  },
  textPhone: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
    marginLeft: 2,
    marginTop: 2,
  },
  transactionId: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
    marginLeft: 2,
    marginTop: 2,
  },
  date: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
    marginLeft: 2,
    marginTop: 2,
    textAlign:'right'
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
  spinnerText: {
    color: '#FFF',
  },
});

export default Transaction;
