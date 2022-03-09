import { View, Text, FlatList, Image} from 'react-native'
import React from 'react'
export const hinhnen = require('../../Assets/icon/hinhnen.jpg');

const data = [
	{
		id: 1,
		title: 'Running Shoes',
		name: "Nike Air Zoom Running Shoes",
		price: '$30',
	},
  {
		id: 2,
		title: '...Shoes',
		name: "...m Running Shoes",
		price: '$30',
	},
  {
		id: 3,
		title: 'Running Shoes',
		name: "Nike Air Zoom Running Shoes",
		price: '$30',
	},
  {
		id: 4,
		title: 'Running Shoes',
		name: "Nike Air Zoom Running Shoes",
		price: '$30',
	},
]


const Cart = () => {
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#FFFFFF'}}>
      <View style={{width:'100%',height:'10%',justifyContent:'center',alignItems: 'center'}}>
        <Text style={{fontSize:16,fontWeight:'bold',color:'black'}}>My Order</Text>
      </View>
      
      <View style={{width:'100%',height:'8%',backgroundColor:'#eeeee4',flexDirection: 'row',alignItems:'space-between',alignItems: 'center',}}>
          <Text style={{fontSize:16,fontWeight:'bold',marginTop:25,color:'black'}}>Your Items</Text>
          <Text style={{fontSize:16,fontWeight:'bold',marginLeft:240,marginTop:25,color:'#25a5be'}}>See Menu</Text>
        </View>

      <View style={{width:'100%',height:'70%',}}>
        
        <FlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={({ item }) => {
				return (
					<View style={{ width: '96%', height: 100, borderRadius: 15,marginLeft: 10,flexDirection: 'row',marginTop: 6}}>
				<View style={{width: '25%', height:'100%',borderRadius: 10,}}>
					<Image style={{width:'100%', height:'100%',borderRadius: 10}} source={hinhnen} />
				</View>
				<View style={{width:'100%',height:100,justifyContent:'center',borderRadius: 10,marginLeft: 10}}>
					<Text style={{fontSize:16,fontWeight:'400',color:'black',marginLeft: 10}}>{item.title}</Text>
					<Text style={{fontSize:16,fontWeight:'400',color:'black',marginLeft: 10}}>{item.name}</Text>
					<Text style={{fontSize:16,fontWeight:'bold',color:'black',marginLeft: 10}}>{item.price}</Text>
				</View>
			</View>
				);
			}}
			/>
      </View>
      
      <View style={{width:'100%',height:'10%',flexDirection: 'row',alignItems:'space-between'}}>
         <View style={{width:'55%',height:'50%',alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontSize:20,fontWeight:'900', color: '#ea8631'}}>Total Price</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>$120</Text>
         </View>
         <View style={{width:'40%',height:'70%',backgroundColor:'#ea8631',alignItems: 'center',justifyContent: 'center',borderRadius: 20}}>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Order now</Text>
         </View>
        </View>
     
    </View>

  )
}

export default Cart;