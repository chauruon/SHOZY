import React, { useState } from 'react';

import styles from './styles';
import { Image, Text, TextInput, View, Switch, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import { icons } from '../../Components/Constants';

const data = [
  {
    id: 1,
    title: 'Nike Bag',
    price: '1,999,999',
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomePage = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

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
        <View style={{ width: '100%', height: '70%'}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20}}>most popural</Text>
          <View style={{ width: '100%', height: '70%'}}>
            <View style={{width: '50%',height: '80%',backgroundColor:'white',borderRadius: 30,marginTop:5}}>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) =>{
                  <View
                  style={{width: '75%', height: '100%',backgroundColor:'red'}}>
                  <Text style={{fontSize: 40}}>{item.title}</Text>
                  <Text style={{fontSize: 20}}>{item.price}</Text>
                 </View>
                }}
              />
            </View>

          </View>
          
        </View>
      </View>
    </>
  );
};
export default HomePage;
