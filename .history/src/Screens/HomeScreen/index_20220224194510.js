import React, { useState } from 'react';

import styles from './styles';
import { Image, Text, TextInput, View, Switch, SafeAreaView } from 'react-native';
import { icons } from '../../Components/Constants';

const HomePage = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
        <View style={{width:'50%', height:'35%',marginTop:15,marginLeft:10,flexDirection: 'row'}}> 
        <Switch 
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> 
      <Text>Sneacker</Text>
      </View>
      </View>
      
    </View>

  );
};


export default HomePage;
