import React from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from '../Components/Constants';

import HomePage from '../Screens/HomeScreen';
import Favourite from '../Screens/FavouriteScreen';
import CartScreen from '../Screens/CartScreen';
import BillScreen from '../Screens/BillScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              color={color}
              style={styles.bottom_icons}
            />
          ),
          tabBarOptions: {
            activeTintColor: '#e91e63',
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.favourite}
              resizeMode="contain"
              color={color}
              style={styles.bottom_icons}
            />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.shopping_bag}
              resizeMode="contain"
              color={color}
              style={styles.bottom_icons}
            />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Bill"
        component={BillScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.bill}
              resizeMode="contain"
              color={color}
              style={styles.bottom_icons}
            />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={icons.user}
              color={color}
              resizeMode="contain"
              style={styles.bottom_icons}
            />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottom_icons: {
    width: 30,
    height: 30,
    tintColor: '#DBDBDB',
  },
});
