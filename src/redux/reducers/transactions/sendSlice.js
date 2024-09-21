import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    type: [],
    receiverphone: [],
    amount: [],
    password: [],
    qrcode: [],
};

const storeTypeSlice = createSlice({
    name: "send",
    initialState,
    reducers: {
        addPhoneToStore(state, action) {
            state.receiverphone = action.payload;
            AsyncStorage.setItem("receiverphone", JSON.stringify(state.receiverphone));
        },
        addtypeToStore(state, action) {
            state.type = action.payload;
            AsyncStorage.setItem("sendType", JSON.stringify(state.type));
        },
        addAmountToStore(state, action) {
            state.amount = action.payload;
            AsyncStorage.setItem("amount", JSON.stringify(state.amount));
        },
        addPasswordToStore(state, action) {
            state.password = action.payload;
            AsyncStorage.setItem("setPassword", JSON.stringify(state.password));
        },
        addQRToStore(state, action) {
            state.qrcode = action.payload;
            AsyncStorage.setItem("setQR", JSON.stringify(state.qrcode));
        },
        clearPasswordStore(state) {
            state.password = []; // Clear the password in Redux state
            AsyncStorage.removeItem("setPassword"); // Remove password from AsyncStorage
        },
        clearStore(state) {
            state.type = [];
            state.receiverphone = [];
            state.amount = [];
            state.password = [];
            state.qrcode = [];
        },
    },
});

export const { addPhoneToStore, addtypeToStore, addAmountToStore, addPasswordToStore, addQRToStore, clearPasswordStore, clearStore } = storeTypeSlice.actions;
export default storeTypeSlice.reducer;
