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
            <SafeAreaView style={{width: '50%',height: '80%',backgroundColor:'white',borderRadius: 30,marginTop:5}}>
            <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 200,
                    alignItems: 'center',
                    backgroundColor: 'white',
                  }}>
                  <View
                    style={{
                      width: '95%',
                      height: '20%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 16}}>NightMore.heartshop.com</Text>
                    <Text style={{fontSize: 16}}>Chi tiết sản phẩm</Text>
                  </View>
                  <View
                    style={{
                      width: '95%',
                      height: '60%',
                      backgroundColor: 'white',
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '25%', height: '100%'}}>
                      <Image
                        style={{width: 100, height: 100}}
                        source={{
                          uri:
                            'https://cf.shopee.vn/file/311918633451d5d5e9da52ecb7aef296',
                        }}
                      />
                    </View>
            </SafeAreaView>

          </View>
          
        </View>
      </View>
    </>
  );
};
export default HomePage;
