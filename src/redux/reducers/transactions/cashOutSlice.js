import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost } from "../../utilities/apiCaller";

export const createCashOut = createAsyncThunk(
    "/cashout",
    async ({ data, token }, { rejectWithValue }) => {
        try {
            const response = await privatePost("/cashout", token, data);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const cashOutSlice = createSlice({
    name: "cashout",
    initialState: {
        cashout: [],
        isLoading: false,
        success: false,
        error: '',
        errorMessage: "",
    },

    extraReducers: (builder) => {
        builder.addCase(createCashOut.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createCashOut.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.cashout = action.payload;
            state.success = true;
        });
        builder.addCase(createCashOut.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export default cashOutSlice.reducer;