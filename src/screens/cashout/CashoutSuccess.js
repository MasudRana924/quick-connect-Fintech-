import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigation } from '@react-navigation/native';
import { clearAgentNumber } from '../../redux/reducers/transactions/agentNumberSlice';
import { clearPasswordStore, clearStore } from '../../redux/reducers/transactions/sendSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import { clearTakePassword } from '../../redux/reducers/transactions/takePasswordSlice';
const CashoutSuccess = () => {
    const navigation = useNavigation();
    const { transactions } = useSelector(state => state.cashOut.cashout);
    const dispatch = useDispatch();
    const handleProceed = () => {
        navigation.navigate('Home');
        dispatch(clearAgentNumber());
        dispatch(clearStore());
        dispatch(clearPasswordStore());
        dispatch(clearTakePassword());
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.containerSuccess}>
                    <Icon name="checkmark-circle" style={styles.circleIcon}></Icon>
                    <Text style={styles.typeTitle}>{transactions?.type} Successful </Text>
                </View>
                <View style={styles.receiverInfo}>
                    <Text style={styles.receiverPhoneTitle}>Recipient</Text>
                    <View style={styles.flexContainer}>
                        <TouchableOpacity style={styles.buttonZero}>
                            <Text style={styles.buttonZeroText}>0</Text>
                        </TouchableOpacity>

                        <Text style={styles.receiverPhone}>{transactions.receiverphone}</Text>
                    </View>
                </View>

                <View style={styles.transactionDetails}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>Trx ID</Text>
                        <View style={styles.verticalDivider} />
                        <Text style={styles.detailValue}>{transactions.tranId}</Text>
                    </View>

                    {/* Divider */}
                    <View style={styles.divider} />

                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>Amount</Text>
                        <View style={styles.verticalDivider} />
                        <Text style={styles.detailValue}>{transactions.amount}.00 </Text>
                    </View>

                    {/* Divider */}
                    <View style={styles.divider} />

                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>Charge</Text>
                        <View style={styles.verticalDivider} />
                        <Text style={styles.detailValue}>00.00 </Text>
                    </View>
                </View>

                <View style={styles.rewardInfo}>
                    <Icon name="star" style={styles.starIcon}></Icon>
                    <Text style={styles.rewardText}>You have got the reward point</Text>
                    <Link to="/reward" style={styles.rewardLink}>
                        <Text style={styles.rewardLinkText}>See reward</Text>
                    </Link>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleProceed}>
                <Text style={styles.buttonText}>Back to home</Text>
                <Icon name="arrow-forward" style={styles.buttonText}></Icon>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CashoutSuccess;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSuccess: {
        // flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    typeTitle: {
        fontSize: 22,
        color: '#ff006e',
    },
    receiverInfo: {
        backgroundColor: 'white',
        height: 100,
        padding: 8,
        marginBottom: 16,
        width: '100%',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E8E8',
    },
    receiverTitle: {
        fontSize: 14,
        paddingTop: 8,
        textAlign: 'left',
    },
    receiverDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    receiverPhoneTitle: {
        fontSize: 13,
        alignSelf: 'flex-start',
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    buttonZero: {
        marginRight: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#ff006e',
        borderRadius: 5,
    },
    buttonZeroText: {
        color: 'white',
        fontSize: 16,
    },
    receiverPhone: {
        fontSize: 12,
        flex: 1,
    },
    transactionDetails: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    detailTitle: {
        fontSize: 16,
        color: '#000814',
        marginTop: 20,
        flex: 1,
        textAlign: 'left',
    },
    detailValue: {
        fontSize: 16,
        color: '#1f2937',
        marginTop: 20,
        flex: 1,
        textAlign: 'right',
    },
    verticalDivider: {
        width: 1,
        height: '100%',
        backgroundColor: '#d1d5db',
        marginHorizontal: 8,
    },
    divider: {
        height: 1,
        backgroundColor: '#d1d5db',
        marginVertical: 8,
    },
    rewardInfo: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E8E8',
    },
    rewardText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 8,
    },
    starIcon: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: 8,
        color: '#ff006e',
    },
    circleIcon: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 8,
        color: '#ff006e',
    },
    rewardLink: {
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    rewardLinkText: {
        fontSize: 14,
        color: '#ff006e',
    },
    button: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ff006e',
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
