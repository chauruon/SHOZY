import React, { useState } from 'react';

import styles from './styles';
import { Image, Text, TextInput, View, Switch,FlatList, ScrollView,} from 'react-native';
import { icons } from '../../Components/Constants';

export const hinhnen = require ('../../Assets/icon/bell.png');

const data = [
  {
    id: 1,
    image: hinhnen,
    title: 'air force',
    name: "nike",
    price: '$115',
  },
  {
    id: 2,
    image:hinhnen,
    title: 'air force',
    name: "nike",
    price: '$115',
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const HomePage = props => {
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
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>most popural</Text>
        <View style={{ width: '50%', height: '50%', backgroundColor: 'gray',}}> 
          <FlatList
              data={data}
              horizontal
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                return (
                  <View >
                  <View style={{ width: '96%', height: '16%', backgroundColor: 'white', borderRadius: 20,marginLeft:4,marginTop:2}}>                   
                   
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>{item.title}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'itachi', color: 'black', marginLeft: 20 }}>{item.name}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>{item.price}</Text>
                  </View>
                  </View>
                );
              }}
            />
        </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20,marginTop: 15}}>last viewed</Text>
        <View style={{ width: '90%', height: '20%', backgroundColor: 'white', borderRadius: 20 ,flexDirection: 'row',marginTop: 15,marginLeft: 15}}>
          <Image style={{width: "25%", height: "90%", borderRadius: 20, marginTop:4,marginLeft:4 }}
            source={{uri:'https://cf.shopee.vn/file/311918633451d5d5e9da52ecb7aef296'}}/>
          <View style={{ width: '100%', height: '100%'}}>
                  <View style={{ width: '70%', height: '100%', backgroundColor: 'white',marginLeft:5}}>                   
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>original superstar</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'itachi', color: 'black', marginLeft: 20 }}>adidas</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>$75</Text>
                  </View>                   
            </View>
          </View>
        
        
      </View>
     
    </>
  );
};
export default HomePage;
