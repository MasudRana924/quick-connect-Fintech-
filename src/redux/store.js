import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthSlice from './reducers/auth/authSlice';
import CreateAccountSlice from './reducers/auth/registerSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import ProductsSlice from './reducers/products/productSlice';


const reducers = combineReducers({
  auth: AuthSlice,
  products: ProductsSlice,
  register: CreateAccountSlice

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