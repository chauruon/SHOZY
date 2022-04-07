// return (
    <TouchableOpacity style={{ width: 180, height: 240,borderRadius: 10 }} onPress={_onPress}>
        <View style={{borderRadius: 10, marginLeft: 10,borderRadius: 10}}>
            <Image style={{height: '100%',borderRadius: 10,}} source={{ uri: item.image }} />
            <View style={{ position: 'absolute',flexDirection:'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={postShopingCart(item._id)} style={{position:'absolute',zIndex:1,padding:10, paddingRight:20 }} >
                    <Image style={{ width:35,height:35}} source={icons.shopping_cart} />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',zIndex: 1,borderRadius: 10}}>
                <View style={{borderRadius: 10, position: 'absolute',width:170}}>
                    <LinearGradient start={{x: 0.0, y: 0.9}} end={{x: 0.0, y: 0}} style= {{borderRadius: 10}}colors={linearGradientColors} >
                        <View style={{borderRadius: 10}}>
                            <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: '800', color: 'black', marginTop: 8 }}>{item.name}</Text>
                            <Text numberOfLines={1} style={{ fontSize: 15, color: 'black' }}>{item.price}</Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </View>
    </TouchableOpacity>
// );