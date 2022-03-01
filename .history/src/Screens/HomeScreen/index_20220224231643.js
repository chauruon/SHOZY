import React, { useState } from 'react';

import styles from './styles';
import { Image, Text, TextInput, View, Switch, SafeAreaView, FlatList } from 'react-native';
import { icons } from '../../Components/Constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
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
        <View style={{ width: '100%', height: '70%', backgroundColor: 'yellow' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>most popural</Text>
          <View style={{ width: '100%', height: '70%', backgroundColor: 'pink' }}>
            <SafeAreaView style={styles.container}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </SafeAreaView>

          </View>
        </View>
      </View>
    </>
  );
};


export default HomePage;
