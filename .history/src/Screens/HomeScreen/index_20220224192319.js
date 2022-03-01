import React, { useState } from 'react';

import styles from './styles';
import { Image, Text, TextInput, View, Switch, SafeAreaView } from 'react-native';
import { icons } from '../../Components/Constants';

const HomePage = () => {
  const [switchValue, setswitchValue] = useState(false);
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
      <View style={styles.container}>
        <Text style={styles.slogan}>find your best shoes!!!!!</Text>
        <View style={styles.filter_view}>
          <View style={styles.search_view}>
            <Image style={styles.icon_search} source={icons.search} />
            <TextInput
              placeholder="Search"
              style={styles.input_search}></TextInput>
          </View>
          <Image source={icons.filter} />
        </View>
        <View style={{width:'40%', height:'40%', backgroundColor:'black',}}> 

      </View>
      </View>
      
    </View>

  );
};


export default HomePage;
