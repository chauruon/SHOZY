import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
export const S1 = require('../../Assets/icon/1.jpg');
export const S2 = require('../../Assets/icon/2.jpg');
export const S3 = require('../../Assets/icon/3.jpg');
export const S4 = require('../../Assets/icon/4.jpg');
export const S5 = require('../../Assets/icon/5.jpg');
export const S6 = require('../../Assets/icon/6.jpg');

const data = [
  {
    id: 1,
    title: 'Nike',
    image: S5,
    price: '99',
  },
  {
    id: 2,
    title: 'Nike',
    imgae: S5,
    price: '99',
  },
  {
    id: 3,
    title: 'Nike',
    image: S4,
    price: '99',
  },
  {
    id: 4,
    title: 'Nike',
    image: S5,
    price: '99',
  },
  {
    id: 5,
    title: 'Nike',
    image: S5,
    price: '99',
  },
  {
    id: 6,
    title: 'Nike',
    image: S5,
    price: '99',
  },
];

const HistoryScreen = ({ navigation }) => {
  return (
    <View>
      <View style={Styles.header}>

        <View style={Styles.mid}>
          <Text style={{ fontSize: 20 }}>History</Text>
        </View>
        <View style={Styles.left} />
      </View>
      <View style={Styles.body}>


        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: '96%',
                    height: 100,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginTop: 5,
                    marginLeft: 7,
                    borderRadius: 30
                  }}>
                  <View
                    style={{
                      width: '95%',
                      height: '20%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',

                    }}>
                  </View>
                  <View
                    style={{
                      width: '85%',
                      height: '100%',
                      backgroundColor: 'white',
                      flexDirection: 'row',
                      borderRadius: 30,
                      marginRight: 40,
                      marginTop: -20
                    }}>
                    <View style={{ width: '25%', height: '100%', }}>
                      <Image
                        style={{ width: 100, height: 90, borderRadius: 30, marginTop: 5 }}
                        source={item.image}
                      />
                    </View>
                    <View
                      style={{ width: '75%', height: '100%', marginLeft: 40, borderRadius: 30 }}>
                      <Text style={{ fontSize: 20 }}>{item.title}</Text>
                      <Text style={{ fontSize: 15 }}>{'$'}{item.price}</Text>
                      <View
                        style={{
                          width: '50%',
                          height: '100%',
                          backgroundColor: 'white',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          marginTop: -48,
                          marginLeft: 120,
                          borderRadius: 30,
                        }}>
                        <TouchableOpacity
                          style={{
                            width: '80%',
                            height: '60%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ea8631',
                            borderRadius: 20
                          }}>
                          <Text style={{color: 'white' }}>Mua lại</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />


        </View>
      </View>
      <View style={Styles.foot}>
        <View
          style={{ width: '50%', height: '50%', alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 15, }}>Tổng tiền: {'$'}176</Text>
        </View>
    
      </View>
    </View>
  );
};
export default HistoryScreen;
export const Styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
  },
  text1: {
    fontSize: 16,
    marginLeft: 10,
  },
  left: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  body: {
    width: '100%',
    height: '86%',
  },
  foot: {
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});