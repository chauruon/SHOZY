import React, { useState, useEffect } from 'react';
import styles from './styles';
import { Image, Text, TouchableOpacity, TextInput, View, FlatList, SafeAreaView, RefreshControl, Dimensions, } from 'react-native';
import { icons } from '../../Components/Constants';
import { DetailsItems } from '../DetailsProduct/DetailsItems';
import { getPro, Cart } from "../../Api/Products";
import LinearGradient from 'react-native-linear-gradient';
import { showAlert, resetNavigation } from '../../Utils/Common';
import ItemList from './ItemList';

export const background = require('../../Assets/icon/background.jpg');
export const background1 = require('../../Assets/icon/background1.jpg');
export const plus = require('../../Assets/icon/plus.png');
export const S1 = require('../../Assets/icon/1.jpg');
export const S2 = require('../../Assets/icon/2.jpg');
export const S3 = require('../../Assets/icon/3.jpg');
export const S4 = require('../../Assets/icon/4.jpg');
export const S5 = require('../../Assets/icon/5.jpg');
export const S6 = require('../../Assets/icon/6.jpg');

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const HomePage = (props) => {
	const { navigation,refreshing} = props;
	const [isEnabled, setIsEnabled] = useState(false);
	const [idProduct, setIdProduct] = useState("");
	const [data, setData] = useState([]);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const linearGradientColors = ['white', 'rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0)'];

	const renderItem = ({ item, index }) => {
		if (item) {
			return (
				<ItemList {...props} item={item} />
			)
		}
	}


	useEffect( async () => {
		await getPro().then(pro => {
			if (pro) {
				setData(pro.data);
				// console.log(`get advert item: ${JSON.stringify(pro.data)}`);
			}
		});
	}, []);

    const _onDetail = () => {
		navigation.navigate("DetailsScreen")
	}
	const onRefresh = () => {
		// <ProgressBar/>
		// this.page = 1;
		setState({ data: [] }, getPro);
	}

	return (
		<SafeAreaView style={{ height: height, justifyContent: 'center', marginTop:5}}>
			<View style={styles.filter_view}>
				<View style={styles.search_view}>
					<Image style={styles.icon_search} source={icons.search} />
					<TextInput
						placeholder="Search"
						style={styles.input_search}></TextInput>
				</View>
				<Image source={icons.filter} />
			</View>
			<Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 20, marginTop: 5 }}>NỔI BẬT</Text>
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<FlatList
						data={data}
						refreshControl={
							<RefreshControl
								refreshing={refreshing} 
								onRefresh={onRefresh}
								colors = {linearGradientColors} 
							/>}
						keyExtractor={item => item._id}
						horizontal
						renderItem={renderItem}
					/>
				</View>
				<View style={{ flex: 2}}>
					<Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 20 }}>SẢN PHẨM</Text>
					<View style={{ flex: 2, height: "100%", backgroundColor: "#dddddd" }}>
						<FlatList
							data={data}
							keyExtractor={item => item._id}
							renderItem={({ item }) => {
								return (
									<TouchableOpacity onPress={_onDetail}>
										<View style={{ margin: 5, flexDirection: 'row', borderRadius: 10 }}>
											<Image style={{ width: 100, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} source={{ uri: item.image }} />
											<View style={{ width: width - 114, height: 100, borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#FFFFFF', alignSelf: 'center' }}>
												<Text style={{ fontSize: 18, fontWeight: '300', color: 'black', marginLeft: 10, marginTop: 8 }}>{item.name}</Text>
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