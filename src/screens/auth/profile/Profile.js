import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ArrowIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Profile = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { user } = useSelector(state => state.auth.userData);
    const [avatar, setAvatar] = useState(user?.avatarLogo || null);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleImageSelection = () => {
        Alert.alert(
            "Change Profile Picture",
            "Choose an option",
            [
                { text: "Camera", onPress: openCamera },
                { text: "Gallery", onPress: openGallery },
                { text: "Cancel", style: "cancel" }
            ]
        );
    };

    const openCamera = () => {
        launchCamera({ mediaType: 'photo', quality: 1 }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets) {
                const source = { uri: response.assets[0].uri };
                setAvatar(source.uri);
                // Dispatch or handle the new image as needed
            }
        });
    };

    const openGallery = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets) {
                const source = { uri: response.assets[0].uri };
                setAvatar(source.uri);
                // Dispatch or handle the new image as needed
            }
        });
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.header}>
                <ArrowIcon name="arrow-back" style={styles.arrowIcon} onPress={handleGoBack} />
                <Text style={styles.headerText}>Profile</Text>
                <ArrowIcon name="ellipsis-vertical" style={styles.arrowIcon} />
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    {avatar ? (
                        <Image source={{ uri: avatar }} style={styles.avatar} />
                    ) : (
                        <Icon name="user" size={100} color="#ccc" />
                    )}
                    <TouchableOpacity style={styles.cameraIcon} onPress={handleImageSelection}>
                        <Icon name="camera" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.userInfo}>
                    {user?.firstname && user?.lastname ? (
                        <Text style={styles.userName}>{user.firstname} {user.lastname}</Text>
                    ) : (
                        <Text style={styles.userName}>Mr. ABC</Text>
                    )}
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('UpdateName')}>
                    <Icon name="edit" size={24} color="white" style={styles.icons} />
                    <Text style={styles.optionText}>Change Name</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <ArrowIcon name="qr-code" size={24} color="white" style={styles.icons} />
                    <Text style={styles.optionText}>My QR Code</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        height: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3a86ff',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 70,
    },
    arrowIcon: {
        color: 'white',
        fontSize: 20,
        paddingTop: 15
    },
    headerText: {
        paddingTop: 15,
        fontSize: 20,
        color: 'white'
    },
    profileContainer: {
        alignItems: 'center',
        padding: 16,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#3a86ff',
        padding: 8,
        borderRadius: 50,
    },
    icons: {
        backgroundColor: '#3a86ff',
        padding: 8,
        borderRadius: 50,
    },
    userInfo: {
        alignItems: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 15
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginLeft: 16,
    },
});

export default Profile;
