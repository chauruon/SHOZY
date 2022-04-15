import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
export const S1 = require('../../Assets/icon/1.jpg');
export const S2 = require('../../Assets/icon/2.jpg');
export const S3 = require('../../Assets/icon/3.jpg');
export const S4 = require('../../Assets/icon/4.jpg');
export const S5 = require('../../Assets/icon/5.jpg');
export const S6 = require('../../Assets/icon/6.jpg');

const data = [
  {
    id:1,
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
    id:4,
    title: 'Nike',
    image: S5,
    price: '99',
  },
  {
    id:5,
    title: 'Nike',
    image: S5,
    price: '99',
  },
  {
    id:6,
    title: 'Nike',
    image: S5,
    price: '99',
  },
];

const CartScreen = ({navigation}) => {
  // const handleSub = useCallback(() => {
  //     if (quali > 1) {
  //         setQuali(quali - 1);
  //     }
  // }, [quali]);
  // const handleSum = useCallback(() => {
  //     setQuali(quali + 1);
  // }, [quali]);
  // const [quali, setQuali] = useState(1);

  const [count, setCount] = useState(1);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => {
    if (count === 1) {
      return setCount(1);
    }
    return setCount(count - 1);
    
  };

  return (
    <View>
      <View style={Styles.header}>
    
        <View style={Styles.mid}>
          <Text style={{fontSize: 20}}>Giỏ hàng</Text>
        </View>
        <View style={Styles.left} />
      </View>
      <View style={Styles.body}>

        <View
          style={{
            width: '100%',
            height: 100,
            backgroundColor: '#EAF6FF',
            flexDirection: 'row',
          }}>
          <View style={{}}>
            <Text style={Styles.text}>Địa chỉ nhận hàng</Text>
            <Text style={Styles.text1}>Dương Quốc Thắng | 123456789</Text>
            <Text style={Styles.text1}>Nhà Bè, Quận 7, TP HCM</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item && item.id.toString()}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: '96%',
                    height: 100,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginTop:5,
                    marginLeft:7,
                    borderRadius:30
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
                      borderRadius:30,
                      marginRight:40,
                      marginTop:-20
                    }}>
                    <View style={{width: '25%', height: '100%',}}>
                      <Image
                        style={{width: 100, height: 90,borderRadius:30,marginTop:5}}
                        source={item.image}
                      />
                    </View>
                    <View
                      style={{width: '75%', height: '100%', marginLeft: 40,borderRadius:30}}>
                      <Text style={{fontSize: 20}}>{item.title}</Text>
                      <Text style={{fontSize: 15}}>{'$'}{item.price}</Text>
                      <View
                        style={{
                          width: '50%',
                          height: '100%',
                          backgroundColor: 'white',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          marginTop:-48,
                          marginLeft:120,
                          borderRadius:30,
                        }}>
                        <TouchableOpacity onPress={decrementCount}>
                          <View style={{backgroundColor: 'white'}}>
                            <Text style={{fontSize: 30}}>-</Text>
                          </View>
                        </TouchableOpacity>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 20,
                          }}>
                          <Text fontType="bold" size={30} center>
                            {count}
                          </Text>
                        </View>
                        <TouchableOpacity onPress={incrementCount}>
                          <View style={{backgroundColor: 'white'}}>
                            <Text style={{fontSize: 30}}>+</Text>
                          </View>
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
          style={{width:'50%',height:'50%',alignItems: 'center',justifyContent: 'center',}}>
          <Text style={{fontSize:15,}}>Tổng tiền: {'$'}176</Text>
        </View>
        <TouchableOpacity
          style={{
            width: '40%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ea8631',
            borderRadius: 20
          }}
        
          >
          <Text style={{color: 'white'}}>ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartScreen;
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