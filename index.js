/**
 * @format
 */

 import { AppRegistry } from 'react-native';
 import React from 'react';
 import App from './src/Navigator/Main';
 import {Icon,NativeBaseProvider} from 'native-base';
 import { name as appName } from './app.json';
 import configureStore from './store';
 import { Provider } from 'react-redux';
 
 const store = configureStore();
 
 const RNRedux = () => {
     return (
        <NativeBaseProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </NativeBaseProvider>
     )
 }
 
 AppRegistry.registerComponent(appName, () => RNRedux);