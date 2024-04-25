import { Provider } from "react-redux";
import {store} from './src/redux/store'
import AppNavigation from "./src/routes/AppNavigation";
import {View,StyleSheet } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  );
}

