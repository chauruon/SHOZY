import React, { useState,useEffect} from 'react';

import styles from './styles';
import { Image, Text,TouchableOpacity,TextInput, View,Switch, FlatList, SafeAreaView,Dimensions} from 'react-native';
import { icons } from '../../Components/Constants';

export const background = require('../../Assets/icon/background.jpg');
export const background1 = require('../../Assets/icon/background1.jpg');
export const plus = require('../../Assets/icon/plus.png');



const data = [
	{
		id: 1,
		image: background1,
		title: 'Air Force',
		name: "nike",
		price: '$115',
	},
	{
		id: 2,
		image: background1,
		title: 'Air Force',
		price: '$115',
	},
	{
		id: 3,
		image: background1,
		title: 'Air Force',	
		price: '$115',
	},
	{
		id: 4,
		image: background1,
		title: 'Air Force',	
		price: '$115',
	},
	{
		id: 5,
		image: background1,
		title: 'Air Force',	
		price: '$115',
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const height = Dimensions.get('window').height

export const HomePage = props => {
	const [isEnabled, setIsEnabled] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(1);
	const [selectedMenuType, setSelectedMenuType] = useState(1);
	const [menuList, setMenuList] = useState([]);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	const renderItem = ({ item }) => (
		<Item title={item.title} />
	);

	useEffect(()=>{

	},[]);

	return (
		<SafeAreaView style = {{height: height,justifyContent: 'center',}}>
			{/* <ScrollView style={{ width: '100%', height: '100%' }} > */}
				<View style={styles.cart_view}>
					<Text style={styles.slogan}>find your best shoes!</Text>
					<Image source={icons.shopify} />
				</View>
				<View style={styles.filter_view}>
						<View style={styles.search_view}>
							<Image style={styles.icon_search} source={icons.search} />
							<TextInput
								placeholder="Search"
								style={styles.input_search}></TextInput>
						</View>
						<Image source={icons.filter} />
				</View>
				<View style= {{flex: 1}}>
					<View style= {{flex: 1,height:20}}>
						<FlatList
							data={data}
							keyExtractor={item => item.id}
							horizontal
							renderItem={({ item }) => {
								return (
									<View style={{ width: 150, height: 240,backgroundColor: "#db3e00", borderRadius: 10, marginLeft: 20, marginTop: 15 }}>
										<Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={item.image} />
										<View style={{ width: '90%', height: 60, borderRadius: 10, backgroundColor: 'white', marginTop: '-44%', alignSelf: 'center' }}>
											<Text style={{ fontSize: 18, fontWeight:'300',color:'black',marginLeft:10,marginTop:8}}>{item.title}</Text>
											<View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
											<Text style={{ fontSize: 19, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{item.price}</Text>
											<View style={{marginLeft: 45,marginTop:-8}}>
											<Image source={icons.plus} />
											</View>
											</View>							
										</View>
									</View>
								);
							}}
						/>
					</View>
					<View style = {{flex: 1, backgroundColor: "#9c27b0"}}>
						<Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>last viewed</Text>
						<View style={{flex: 2,height: "50%",backgroundColor: "#fcb900"}}>
							<FlatList
								data={data}
								keyExtractor={item => item.id}
								renderItem={({ item }) => {
									return (
										<View style={{ width: 150, height: 190,backgroundColor: "#db3e00", borderRadius: 10, marginLeft: 20, marginTop: 15 }}>
											<Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={item.image} />
											<View style={{ width: '90%', height: 60, borderRadius: 10, backgroundColor: 'white', marginTop: '-44%', alignSelf: 'center' }}>
												<Text style={{ fontSize: 18, fontWeight:'300',color:'black',marginLeft:10,marginTop:8}}>{item.title}</Text>
												<View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
												<Text style={{ fontSize: 19, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{item.price}</Text>
												<View style={{marginLeft: 45,marginTop:-8}}>
												<Image source={icons.plus} />
												</View>
												</View>							
											</View>
										</View>
									);
								}}
							/>
						</View>
					</View>
				</View>
			{/* </ScrollView> */}
		</SafeAreaView>
	);
};
export default HomePage;
