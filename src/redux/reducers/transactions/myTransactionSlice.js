import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privateGet } from '../../utilities/apiCaller';


export const fetchtransactions = createAsyncThunk(
    'fetchtransactions',
    async ({ token }, { rejectWithValue }) => {
        try {
            console.log("transactions",token);
            const transactions = await privateGet('/my/transactions', token);
            console.log("transactions",transactions);
            console.log("transactions",token);
            return transactions;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchOutTransactions = createAsyncThunk(
    'fetchOutTransactions',
    async ({ userToken }, { rejectWithValue }) => {
        try {
            const transactions = await privateGet('/my/out/transactions', userToken);
            return transactions;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchInTransactions = createAsyncThunk(
    'fetchInTransactions',
    async ({ token }, { rejectWithValue }) => {
        try {
            const transactions = await privateGet('/my/in/transactions', token);
            return transactions;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchLastThreeMonthsTransactions = createAsyncThunk(
    'fetchLastThreeMonthsTransactions',
    async ({ token }, { rejectWithValue }) => {
        try {
            const response = await privateGet('/last-three-months-transactions', token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const mytransactionsSlice = createSlice({
    name: 'mytransactions',
    initialState: {
        mytransactions: [],
        myOutTransactions: [],
        myInTransactions: [],
        transactionsHistry: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchtransactions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchtransactions.fulfilled, (state, action) => {
                state.mytransactions = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchtransactions.rejected, (state) => {
                state.isLoading = false;
                state.mytransactions = [];
            })
            .addCase(fetchOutTransactions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchOutTransactions.fulfilled, (state, action) => {
                state.myOutTransactions = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchOutTransactions.rejected, (state) => {
                state.isLoading = false;
                state.myOutTransactions = [];
            })
            .addCase(fetchInTransactions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchInTransactions.fulfilled, (state, action) => {
                state.myInTransactions = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchInTransactions.rejected, (state) => {
                state.isLoading = false;
                state.myInTransactions = [];
            })
            .addCase(fetchLastThreeMonthsTransactions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLastThreeMonthsTransactions.fulfilled, (state, action) => {
                state.transactionsHistry = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchLastThreeMonthsTransactions.rejected, (state) => {
                state.isLoading = false;
                state.transactionsHistry = [];
            });
    }
});

export default mytransactionsSlice.reducer;