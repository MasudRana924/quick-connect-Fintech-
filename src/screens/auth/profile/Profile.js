import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ArrowIcon from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const Profile = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { user } = useSelector(state => state.auth.userData);
    const [avatar, setAvatar] = useState(user?.avatarLogo || null);
    const [isModalVisible, setModalVisible] = useState(false); // Modal state

    const handleGoBack = () => {
        navigation.goBack();
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible); // Toggle modal visibility
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
                    <TouchableOpacity style={styles.cameraIcon}>
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

                <TouchableOpacity style={styles.option} onPress={toggleModal}>
                    <ArrowIcon name="qr-code" size={24} color="white" style={styles.icons} />
                    <Text style={styles.optionText}>My QR Code</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>
            </View>

            <Modal
                isVisible={isModalVisible}
                onBackdropPress={toggleModal} // Close when tapping outside
                style={styles.bottomModal}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>My QR Code</Text>
                    <QRCode
                        value="https://example.com" // Replace with any static value
                        size={200}
                    />
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        height: '100%',
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
        paddingTop: 15,
    },
    headerText: {
        paddingTop: 15,
        fontSize: 20,
        color: 'white',
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
        marginTop: 15,
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginLeft: 16,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#3a86ff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Profile;
