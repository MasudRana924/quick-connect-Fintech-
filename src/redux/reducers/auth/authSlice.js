import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../../utilities/api';
import axios from 'axios';
import { publicPost } from '../../utilities/apiCaller';
const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '',
  errorMessage: "",
};

// export const login = createAsyncThunk('login', async (params, thunkApi) => {
//   try {
//     console.log("response",params);
//     const response = await axios.post('https://quick-pay-96uq.onrender.com/api/login',params);
//     return response.data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.response.data.message);
//   }
// });
export const login = createAsyncThunk('login', async (params, { rejectWithValue }) => {
  try {
    console.log(params);
    const response = await publicPost("/login", params);
    console.log(
      '🚀 authslice response:',
      response,
    );
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data.message);

  }
});

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {logout: (state) => {
    state.userData = null,
    state.error=''
  }},
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});
export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;