import React, { useState,useEffect} from 'react';
import { Image,StyleSheet,Text,TouchableOpacity,TextInput, View,FlatList,SafeAreaView,Platform,Dimensions, ImageBackground,} from 'react-native';
import { icons } from '../../Components/Constants';
import { Icon } from 'native-base';
import MainStyles from "../../Public/MainStyles"
import {DetailsItems} from '../DetailsProduct/DetailsItems';
import {getPro} from "../../Api/Products"
import ListItem from "./ListItem"

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
const BACKGROUND_WIDTH = Dimensions.get('window').width - 41;
const height = Dimensions.get('window').height/3 * 1.3;
const width = Dimensions.get('window').width/4 * 1.9;
const imageWidth = width ? width : BACKGROUND_WIDTH;
const imageHeight = height ? height : BACKGROUND_WIDTH / 2;


export const HomePage = (props) => {
	const { navigation, route } = props;
	const [isEnabled, setIsEnabled] = useState(false);
	const [data, setData] = useState([]);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	const renderItem = ({ item, index }) => {
		if (item) {
			return (
				<ListItem {...props} item={item} />
			)
		}
	}
	const _onPress = ()=>{
		navigation.navigate("DetailsItems")
	}
	useEffect(()=>{
		getPro().then(pro => {
			if (pro) {
				setData(pro.data);
				console.log(`get advert item: ${JSON.stringify(pro.data)}`);
			}
		});
	},[]);

	return (
		<SafeAreaView style = {{flex: 1,height: height,justifyContent: 'center',}}>
			<View style={styles.filter_view}>
					<View style={styles.search_view}>
						<Image style={styles.icon_search} source={icons.search} />
						<TextInput
							placeholder="Search"
							style={styles.input_search}></TextInput>
					</View>
					<Image source={icons.filter} />
			</View>
			<View style={{flex:2}}>
				<Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 20, marginTop: 10 }}>NỔI BẬT</Text>
				<FlatList
					data={data}
					keyExtractor={item => item._id}
					horizontal
					renderItem={({ item }) => {
						return (
							<TouchableOpacity style={styles.container} onPress={_onPress}>
								<View style={{  width: width, height: height,borderRadius:10}} >
									<ImageBackground style={{width: width,height: height,borderRadius:10,position:"absolute", zIndex:0}} source={{ uri: item.image }} />
									<View style={{flexDirection:"row",justifyContent:"flex-end"}}>
										<TouchableOpacity style={{position:"absolute", zIndex:2,marginTop:48,alignContent:"flex-end",marginTop:0}}>
											<Image style={{ width: 40, height: 40 }} source={icons.shopping_cart }/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{backgroundColor:"#ff5722",position:"absolute", zIndex:1,marginLeft:0,alignContent:"flex-end", justifyContent:"flex-end"}}>
									<View style= {{backgroundColor:"#7bdcb5",width:width,borderTopLeftRadius: 6, borderTopRightRadius: 6}}>
										{item.name ? 
										<View style = {styles.contentCode}>
											<Text style={styles.nameTitle}>{item.name}</Text>
										</View> : null}
										{item.price ?
										<View style={styles.dimensionContainer}>
											<Text style={styles.dimension}>{item.price}</Text>
										</View> : null}
									</View>
								</View>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
			<View style = {{flex: 3}}>
				<Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 20}}>SẢN PHẨM</Text>
				<View style={{height: "100%",backgroundColor: "#dddddd"}}>
					<FlatList
						style={{flex:2}}
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
		</SafeAreaView>
		
	);
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    ...MainStyles.card,
	height:height,
	// backgroundColor:"#fccb00",
	position:"relative",
	zIndex:0,
},
nameTitle: {
	fontSize:20,
	fontWeight:"bold"	,
},
});
