import React from 'react';
import { SafeAreaView, View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigation } from '@react-navigation/native';
import { clearAgentNumber } from '../../redux/reducers/transactions/agentNumberSlice';
// import { BiUserCircle } from 'react-icons/bi';

const CashoutSuccess = () => {
  const navigation = useNavigation();
  const { transactions } = useSelector(state => state.cashOut.cashout);
  const dispatch = useDispatch();
  const handleProceed = () => {
      navigation.navigate('Home');
      dispatch(clearAgentNumber())
  };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.receiverInfo}>
                    <Text style={styles.receiverTitle}>Recipient</Text>
                    <View style={styles.receiverDetails}>
                        {/* <BiUserCircle style={styles.userIcon} /> */}
                        <Text style={styles.receiverPhone}>{transactions.receiverphone}</Text>
                    </View>
                </View>

                <View style={styles.transactionDetails}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>Trx ID</Text>
                        <Text style={styles.detailValue}>{transactions.tranId}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>Amount</Text>
                        <Text style={styles.detailValue}>{transactions.amount}.00 </Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>Charge</Text>
                        <Text style={styles.detailValue}>00.00 </Text>
                    </View>
                </View>

                <View style={styles.rewardInfo}>
                    <Text style={styles.rewardText}>You have got the reward point  </Text>
                    <Link to="/reward" style={styles.rewardLink}>
                        <Text style={styles.rewardLinkText}>See reward</Text>
                    </Link>
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleProceed}
            >
                <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default CashoutSuccess;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#e6e6e9',
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    receiverInfo: {
        backgroundColor: '#f3f4f6',
        height: 80,
        padding: 8,
        marginBottom: 16,
        width:'100%',
        marginTop:30
    },
    receiverTitle: {
        fontSize: 14,
        paddingTop: 8,
        // marginLeft: 8,
        textAlign: 'left',
    },
    receiverDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        height: 40,
        width: 40,
        color: '#9ca3af',
    },
    receiverPhone: {
        marginTop: 8,
        fontSize: 14,
    },
    transactionDetails: {
        // margin: 16,
        width:'100%',
        backgroundColor:'white',
        padding:10
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    detailTitle: {
        fontSize: 16,
        color: '#000814',
        marginTop: 20,
    },
    detailValue: {
        fontSize: 16,
        color: '#1f2937',
        marginTop: 20,
    },
    rewardInfo: {
        // margin: 16,
        // borderWidth: 1,
        // borderRadius: 10,
        // padding: 8,
        // borderColor: '#e5e7eb',
        width:'100%',
        backgroundColor:'white',
        padding:10,
        marginTop:10
    },
    rewardText: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 8,
    },
    rewardLink: {
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    rewardLinkText: {
        fontSize: 12,
        color: '#E2136E',
    },
    button: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E2136E',
  },
  buttonText: {
      color: 'white'
  },
});
