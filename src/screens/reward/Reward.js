import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// import LottieView from 'lottie-react-native';
import coinanimation from '../../assets/coin.json'
const Reward = () => {
    const { user } = useSelector(state => state.auth.userData);
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView>
            <View style={styles.userInfo}>
                <Icon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack}></Icon>
                <Text style={styles.title}>Reward</Text>
            </View>
            <ScrollView>
                <View>
                    {
                        user?.point > 0 ? <View style={styles.pointContainer}>
                            <View>
                                <Text style={styles.pointTitle}> {user?.point < 1000 ? "সিলভার" : user?.point > 1000 ? "গোল্ড" : ""}</Text>
                            </View>
                            <View>
                                <View style={styles.lottieContainer}>
                                    {/* <LottieView source={coinanimation} autoPlay loop style={styles.animation} /> */}
                                    <Text style={styles.point}>{user?.point}</Text>
                                </View>
                            </View>
                        </View> : <View >
                            <View style={styles.rewardTitleContainer}>
                                <Text style={styles.noRwardTitle}>দুঃখিত আপনার কোন রিওয়ার্ড পয়েন্ট নেই</Text>
                            </View>

                        </View>
                    }
                </View>

                <View style={styles.pointDetails}>
                      <View style={styles.pointInformation}>
                      <Icon name="star" style={styles.starIcon} onPress={handleGoBack}></Icon>
                      <Text style={styles.pointInformationTitle}>নিয়মিত লেনদেন করে রিওয়ার্ড পয়েন্ট অর্জন করুন</Text>
                      </View>
                      <View style={styles.pointInformation}>
                      <Icon name="star" style={styles.starIcon} onPress={handleGoBack}></Icon>
                      <Text style={styles.pointInformationTitle}>পয়েন্ট ব্যাবহার করে বিভিন্ন রিওয়ার্ড সংগ্রহ করুন আর সুবিধা উপভোগ করুন </Text>
                      </View>
                      <View style={styles.pointInformation}>
                      <Icon name="star" style={styles.starIcon} onPress={handleGoBack}></Icon>
                      <Text style={styles.pointInformationTitle}>পরবর্তী লেভেল এবং দারুণ সব অফার পেতে বেশি বেশি পয়েন্ট অর্জন করুন </Text>
                      </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Reward;
const styles = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#071B17',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 100,
        paddingTop: 20
    },
    arrowIcon: {
        color: 'white',
        fontSize: 30,
        marginLeft: 5,
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginLeft: 45,
    },
    animation: {
        width: 40,
        height: 40,
    },
    pointTitle: {
        color: 'black',
        fontSize: 18,
    },
    lottieContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 20
    },
    point: {
        color: 'black',
        fontSize: 16,
        marginTop: 10
    },
    pointContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        height: 100,
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 5,
        marginTop: 40,
        backgroundColor: 'white',
    },
    rewardTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    noRwardTitle: {
        color: 'red',
        fontSize: 16,
    },
    pointDetails:{
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        height: 200,
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 5,
        padding: 5,
        marginTop: 40,
        backgroundColor: 'white',
    },
    pointInformation:{
        flexDirection: 'row',
        marginTop:10,
        padding: 5,
    },
    starIcon:{
        color: '#071B17',
        fontSize: 20,
        marginLeft: 5,
    },
    pointInformationTitle:{
        color: 'black',
        marginLeft: 5,
        marginRight:10
    }

});
