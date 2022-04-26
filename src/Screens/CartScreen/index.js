import React, {useState, useCallback,useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import { View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { formatPrice,readPrice,showAlert } from '../../Utils/Common';

import { getPro, Cart, getToCart } from "../../Api/Products";
export const S1 = require('../../Assets/icon/1.jpg');
export const S2 = require('../../Assets/icon/2.jpg');
export const S3 = require('../../Assets/icon/3.jpg');
export const S4 = require('../../Assets/icon/4.jpg');
export const S5 = require('../../Assets/icon/5.jpg');
export const S6 = require('../../Assets/icon/6.jpg');

const CartScreen = ({navigation}) => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({});
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const incrementCount = () => {
    return setCount(count + 1);
  }
  const decrementCount = () => {
    if (count === 1) {
      return setCount(1);
    }
    return setCount(count - 1);
  };
  const totalPrice = ()=>{
    console.log("dm t mệt lắm rồi nha, m muốn ăn gì t cúng. Chi log kiểu này còn k thấy dữ liệu t mệt lắm rồi: "+JSON.stringify(data));
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    data.map((ele,indx)=>{
      console.log("indx: "+indx);
      return indx
    })
  }
  useEffect( () => {
		getToCart().then(pro => {
			if (pro) {
				setData(pro.data);
				// console.log(`get to cart: ${JSON.stringify(pro.data)}`);
			}
		});
	}, []);

  return (
    <View>
      <View style={Styles.header}>
        <View style={Styles.mid}>
          <Text style={{fontSize: 20}}>Giỏ hàng</Text>
        </View>
        <View style={Styles.left} />
      </View>
      <View style={Styles.body}>

        <View style={{width: '100%',height: 100,backgroundColor: '#EAF6FF',flexDirection: 'row',}}>
          <View style={{}}>
            <Text style={Styles.text}>Địa chỉ nhận hàng</Text>
            <Text style={Styles.text1}>Dương Quốc Thắng | 123456789</Text>
            <Text style={Styles.text1}>Nhà Bè, Quận 7, TP HCM</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item && item._id.toString()}
            renderItem={({item}) => {
              return (
                <View style={{width: '96%',height: 100,alignItems: 'center',backgroundColor: 'white',marginTop:5,marginLeft:7,borderRadius:30}}>
                  <View style={{width: '95%',height: '20%',flexDirection: 'row',justifyContent: 'space-between',}}>
                  </View>
                  <View style={{width: '85%',height: '100%',backgroundColor: 'white',flexDirection: 'row',borderRadius:30,marginRight:40,marginTop:-20}}>
                    <View style={{width: '25%', height: '100%',}}>
                      <Image
                        style={{width: 100, height: 90,borderRadius:30,marginTop:5}}
                        source={{uri:item.img}}
                      />
                    </View>
                    <View
                      style={{width: '75%', height: '100%', marginLeft: 40,borderRadius:30}}>
                      <Text style={{fontSize: 20, fontWeight:'bold'}}>{item.nameProduct}</Text>
                      <Text style={{fontSize: 15}}>{formatPrice(item.price)}</Text>
                      <View style={{width: '50%',height: '100%',backgroundColor: 'white',flexDirection: 'row',justifyContent: 'flex-start',alignItems: 'center',marginTop:-48,marginLeft:120,borderRadius:30,}}>
                        <TouchableOpacity onPress={decrementCount}>
                          <View style={{backgroundColor: 'white'}}>
                            <Text style={{fontSize: 30}}>-</Text>
                          </View>
                        </TouchableOpacity>
                        <View style={{justifyContent: 'center',alignItems: 'center',marginHorizontal: 20,}}>
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
          <Text style={{fontSize:15,fontWeight:"bold"}}>Tổng tiền: {totalPrice}</Text>
        </View>
        <TouchableOpacity style={{width: '40%',height: '100%',alignItems: 'center',justifyContent: 'center',backgroundColor: '#ea8631',borderRadius: 20}}>
          <Text style={{color: 'white', fontWeight:'bold'}}>ĐẶT HÀNG</Text>
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