import React from 'react';
import { NavigationContainer, DefaultTheme,DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'native-base'

import Login from '../Components/User/AuthenticateKit/Login';
import Register from '../Components/User/AuthenticateKit/Register';

const Stack = createNativeStackNavigator();

const HideHeader = {
    headerShown: false,
}

function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" options={HideHeader} component={Login} />
                <Stack.Screen name="Register" options={HideHeader} component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
  
  export default Main;