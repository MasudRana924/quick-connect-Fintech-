import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const CashoutSuccess = () => {
    const { transactions,success,isLoading } = useSelector(state => state.cashOut.cashout);
  return (
    <View>
      <Text>Success</Text>
    </View>
  )
}

export default CashoutSuccess;