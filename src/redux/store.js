import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthSlice from './reducers/auth/authSlice';
import CreateAccountSlice from './reducers/auth/registerSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import ProductsSlice from './reducers/products/productSlice';
import takeAgentNumberSlice  from './reducers/transactions/agentNumberSlice';
import storeReducer from './reducers/transactions/sendSlice'
import takePasswordSlice from './reducers/transactions/takePasswordSlice';
import cashOutSlice from './reducers/transactions/cashOutSlice';
import mytransactionsSlice from './reducers/transactions/myTransactionSlice';

const reducers = combineReducers({
  auth: AuthSlice,
  products: ProductsSlice,
  register: CreateAccountSlice,
  takeAgentNumber:takeAgentNumberSlice,
  type:storeReducer,
  takePassword:takePasswordSlice,
  cashOut:cashOutSlice,
  transactions:mytransactionsSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth','register'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);
export { store, persistor };