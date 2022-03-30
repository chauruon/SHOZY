import React from 'react';
import {Appearance} from "react-native"
import { NavigationContainer, DefaultTheme,DarkTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';;
import {Icon,NativeBaseProvider} from 'native-base';

import Login from '../Components/User/AuthenticateKit/Login';
import Register from '../Components/User/AuthenticateKit/Register';
import BottomTab from './BottomTab';
import DetailsScreen from '../Screens/DetailsScreen';

const Stack = createNativeStackNavigator();
const CustomTheme = {
	...DefaultTheme,
	colors: {
		border: 'transparent',
		background: '#f8f8f8',
	},
}
const HideHeader = {headerShown: false,};
const colorScheme = Appearance.getColorScheme();
function Main() {
	return (
		<NavigationContainer theme={colorScheme === "light" ? CustomTheme : DarkTheme}>
			<Stack.Navigator initialRouteName= "Login">
				{/* <Stack.Screen name="Login" options={HideHeader} component={Login} />
				<Stack.Screen name="Register" options={HideHeader} component={Register} />	 */}

				<Stack.Screen name="BottomTab" options={HideHeader} component={BottomTab} />
				<Stack.Screen name="DetailsScreen" options={HideHeader} component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Main;
