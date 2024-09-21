import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost } from "../../utilities/apiCaller";
import Toast from 'react-native-toast-message';
export const createTakePassword = createAsyncThunk(
    "/takePassword",
    async ({ data, token }, { rejectWithValue }) => {
        try {
            const response = await privatePost("/take/password", token, data);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const takePasswordSlice = createSlice({
    name: "password",
    initialState: {
        password: [],
        isLoading: false,
        success: false,
        errorr: '',
    },
    reducers: {
        clearTakePassword: (state) => {
          state.success = false
          state.password = []
          state.isLoading = false
        }
      },
    extraReducers: (builder) => {
        builder.addCase(createTakePassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createTakePassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.errorr = null;
            state.password = action.payload;
            state.success = true;
        });
        builder.addCase(createTakePassword.rejected, (state, action) => {
            state.isLoading = false;
            state.errorr = action.payload;
        });
    },
});
export const { clearTakePassword } = takePasswordSlice.actions;
export default takePasswordSlice.reducer;