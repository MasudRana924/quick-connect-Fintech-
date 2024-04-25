import React from 'react';
import { View,StyleSheet,Image } from 'react-native';
import offerImg from '../../assets/offer.png';
const Offer = () => {
    return (
        <View style={styles.container}>
              <Image source={offerImg} style={styles.offerImage} />
        </View>
    );
};

export default Offer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop:20,
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
    },
    offerImage:{
        height:100,
        width:'100%',
        padding:5
    },

});
