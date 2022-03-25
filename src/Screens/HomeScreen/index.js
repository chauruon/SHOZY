import React, { useState,useEffect} from 'react';
import styles from './styles';
import { Image, Text,TouchableOpacity,TextInput, View,FlatList,SafeAreaView,ScrollView,Dimensions,} from 'react-native';
import { icons } from '../../Components/Constants';
import {DetailsItems} from '../DetailsProduct/DetailsItems';
import {getPro} from "../../Api/Products"

export const background = require('../../Assets/icon/background.jpg');
export const background1 = require('../../Assets/icon/background1.jpg');
export const plus = require('../../Assets/icon/plus.png');
export const S1 = require('../../Assets/icon/1.jpg');
export const S2 = require('../../Assets/icon/2.jpg');
export const S3 = require('../../Assets/icon/3.jpg');
export const S4 = require('../../Assets/icon/4.jpg');
export const S5 = require('../../Assets/icon/5.jpg');
export const S6 = require('../../Assets/icon/6.jpg');

const dataHor = [
	{
		id: 1,
		image: background1,
		title: 'Air Force',
		name: "Nike",
		price: '$115',
	},
	{
		id: 2,
		image: S1,
		title: 'Air Force',
		price: '$115',
	},
	{
		id: 3,
		image: S2,
		title: 'Air Force',	
		price: '$115',
	},
	{
		id: 4,
		image: S3,
		title: 'Air Force',	
		price: '$115',
	},
	{
		id: 5,
		image: S4,
		title: 'Air Force',	
		price: '$115',
	},
];
const dataVer = [
	{
		id: 1,
		image: background1,
		title: 'Air Force',
		name: "Nike",
		price: '$115',
	},
	{
		id: 2,
		image: S1,
		title: 'Air Force',
		name: "Nike",
		price: '$115',
	},
	{
		id: 3,
		image: S2,
		title: 'Air Force',	
		name: "Nike",
		price: '$115',
	},
	{
		id: 4,
		image: S3,
		title: 'Air Force',	
		name: "Nike",
		price: '$115',
	},
	{
		id: 5,
		image: S4,
		title: 'Air Force',	
		name: "Nike",
		price: '$115',
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const HomePage = (props) => {
	const { navigation } = props;
	const [isEnabled, setIsEnabled] = useState(false);
	const [data, setData] = useState([]);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	const renderItem = ({ item }) => (
		<Item title={item.title} />
	);
	const _onPress = ()=>{
		navigation.navigate("DetailsItems")
	}
	useEffect(()=>{
		getPro().then(pro => {
			if (pro) {
				setData(pro.data);
				// console.log(`get advert item: ${JSON.stringify(pro.data)}`);
			}
		});
	},[]);

	return (
		<SafeAreaView style = {{height: height,justifyContent: 'center',}}>
			<View style={styles.filter_view}>
					<View style={styles.search_view}>
						<Image style={styles.icon_search} source={icons.search} />
						<TextInput
							placeholder="Search"
							style={styles.input_search}></TextInput>
					</View>
					<Image source={icons.filter} />
			</View>
			<Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 20, marginTop: 10 }}>NỔI BẬT</Text>
			<View style= {{flex: 1}}>
				<View style= {{flex: 1}}>
					<FlatList
						data={data}
						keyExtractor={item => item._id}
						horizontal
						renderItem={({ item }) => {
							return (
								<TouchableOpacity style={{ width: 150, height: 240,}} onPress={_onPress}>
									<View style={{ width: 150, height: 240,borderRadius: 10, marginLeft: 20, marginTop: 15 }}>
										<View  style={{width: '100%', height: '100%' }}>
											<View style={{flexDirection:'row',justifyContent:'flex-end'}}>
												<TouchableOpacity style={{position: 'absolute',zIndex:2,padding:5}}>
													<Image  style={{width: 30, height: 30}} source={icons.shopping_cart} />
												</TouchableOpacity>
											</View>
											<Image style={{ width: '100%', height: '100%'}} source={{ uri: item.image }}/>
										</View>
											<View style={{position: 'relative',zIndex:1,width: 150,borderTopLeftRadius: 10,borderTopRightRadius:10, backgroundColor: 'red' }}>
												<Text numberOfLines={1} style={{ fontSize: 18, fontWeight:'800',color:'black',marginTop:8}}>{item.name}</Text>
												<View style={{ flex:2, flexDirection:'row'}}>
													<Text numberOfLines={1} style={{ fontSize: 15, color: 'black'}}>{item.price}</Text>				
												</View>
											</View>
									</View>
								</TouchableOpacity>
							);
						}}
					/>
				</View>
				<View style = {{flex: 1.4}}>
					<Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 20, marginTop: 10 }}>SẢN PHẨM</Text>
					<View style={{flex: 2,height: "100%",backgroundColor: "#dddddd"}}>
						<FlatList
							data={dataVer}
							keyExtractor={item => item && item.id.toString()}
							renderItem={({ item }) => {
								return (
									<TouchableOpacity onPress={_onPress}>
										<View style={{margin: 5,flexDirection: 'row', borderRadius:10}}>
											<Image style={{ width: 100, height: 100, borderTopLeftRadius:10, borderBottomLeftRadius:10}} source={item.image} />
											<View style={{ width: width -114, height: 100,borderTopRightRadius: 10, borderBottomRightRadius:10,backgroundColor: '#FFFFFF', alignSelf: 'center' }}>
												<Text style={{ fontSize: 18, fontWeight:'300',color:'black',marginLeft:10,marginTop:8}}>{item.title}</Text>
												<View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
													<Text style={{ fontSize: 19, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{item.price}</Text>
												</View>							
											</View> 
										</View>
									</TouchableOpacity>
								);
							}}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
		
	);
};
export default HomePage;
