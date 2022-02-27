import React from 'react';

import styles from './styles';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {icons} from '../../Components/Constants';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.slogan}>find your best shoes!</Text>
      <View style={styles.filter_view}>
        <View style={styles.search_view}>
          <Image style={styles.icon_search} source={icons.search} />
          <TextInput
            placeholder="Search"
            style={styles.input_search}></TextInput>
        </View>
        <Image source={icons.filter} />
      </View>
    </View>
  );
};

export default HomePage;
