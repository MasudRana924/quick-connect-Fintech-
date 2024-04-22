import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../utilities/api';
import axios from 'axios';
import { publicPost } from '../../utilities/apiCaller';

export const createAccount = createAsyncThunk('register', async (params, { rejectWithValue }) => {
    try {
        console.log(
            'response:',
            params,
        );
        const response = await publicPost("/register", params);
        // const response = await axios.post("https://trust-pay-backend.onrender.com/api/register", params);
        return response;
    } catch (err) {
        return rejectWithValue(err.response.data.message);

    }
});
const initialState = {
    createUser: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    isCreated: false,
    error: '',
    errorMessage: "",
};
const CreateAccountSlice = createSlice({
    name: 'createSlice',
    initialState,
    reducers: {
        clearCreateAccountState: (state) => {
            state.isCreated = false
          }
    },
    extraReducers: builder => {
        builder.addCase(createAccount.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(createAccount.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isCreated = true;
            state.isSuccess = true;
            state.createUser = action.payload;
        });
        builder.addCase(createAccount.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        });
    },
});
export const { clearCreateAccountState } = CreateAccountSlice.actions;
export default CreateAccountSlice.reducer;