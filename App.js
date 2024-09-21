import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigation from './src/routes/AppNavigation';
export default function App() {
  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  );
}

