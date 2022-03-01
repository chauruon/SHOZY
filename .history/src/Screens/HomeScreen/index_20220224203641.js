import React, { useState } from 'react';

import styles from './styles';
import { Image, Text, TextInput, View, Switch, SafeAreaView, FlatList} from 'react-native';
import { icons } from '../../Components/Constants';

// const data=[

// ];

const HomePage = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <View style={{ width: '100%', height: '100%' }}>
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
          <View style={{ width: '45%', height: '30%', marginTop: 15, flexDirection: 'row', backgroundColor: 'black', borderRadius: 200, alignItems: 'center' }}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sneacker</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: '70%' ,backgroundColor:'yellow'}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>most popural</Text>
          <View style={{}}>
            <View style={{}}>

            </View>
            {/* <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.postId}
            /> */}
          </View>
        </View>
      </View>
    </>
  );
};


export default HomePage;
