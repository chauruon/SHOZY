import React, { useState } from 'react';

import styles from './styles';
import { Image, Text, TextInput, View, Switch, FlatList, ScrollView, } from 'react-native';
import { icons } from '../../Components/Constants';

export const hinhnen = require('../../Assets/icon/hinhnen.jpg');

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
		image: hinhnen,
		title: 'air force',
		name: "nike",
		price: '$115',
	},
	{
		id: 3,
		image: hinhnen,
		title: 'air force',
		name: "nike",
		price: '$115',
	},
	{
		id: 4,
		image: hinhnen,
		title: 'air force',
		name: "nike",
		price: '$115',
	},
	{
		id: 5,
		image: hinhnen,
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
		<View style={{ width: '100%', height: '100%' }}>
			<View style={styles.container}>
				<Text style={styles.slogan}>find your best shoes!</Text>
				<View style={styles.search_view}>
						<Image style={styles.icon_search} source={icons.search} />
						<TextInput
							placeholder="Cart"
							style={styles.input_search}></TextInput>
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
			<FlatList
				data={data}
				keyExtractor={item => item.id}
				horizontal
				renderItem={({ item }) => {
				return (
					<View style={{ width: 150, height: '90%', borderRadius: 10, marginLeft: 20 ,marginTop: 15}}>
						<Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={item.image} />
						<View style={{ width: '90%', height: 70, borderRadius: 10, backgroundColor: 'white', marginTop: '-50%', alignSelf: 'center' }}>
							<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{item.title}</Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{item.name}</Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{item.price}</Text>
						</View>
					</View>
				);
			}}
			/>
			<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20}}>last viewed</Text>
			<View style={{ width: '90%', height: '15%', borderRadius: 15,marginLeft: 20,flexDirection: 'row',marginTop: 15,backgroundColor:'white',}}>
				<View style={{width: '25%', height:'100%',borderRadius: 10}}>
					<Image style={{width:'100%', height:'100%',borderRadius: 10}} source={hinhnen} />
				</View>
				<View style={{width: '73%', height:'100%',justifyContent:'center',borderRadius: 10,marginLeft: 10}}>
					<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>original superstar</Text>
					<Text style={{ fontSize: 16, fontWeight:'bold', color: 'black', marginLeft: 10 }}>adidas</Text>
					<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>$75</Text>
				</View>
			</View>
		</View>
	);
};
export default HomePage;
