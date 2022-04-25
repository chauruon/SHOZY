import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View,Image,Platform, ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainStyles from '../../Public/MainStyles';
import { getPro, Cart } from "../../Api/Products";
import { Icon } from 'native-base';
import { icons } from '../../Components/Constants';
import MainConstants from '../../Public/MainConstants';
import Toast from 'react-native-simple-toast';
import { formatPrice,readPrice,showAlert } from '../../Utils/Common';
import _Image from '../../Components/Modules/UIKit/_Image';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import Svg, { Circle, Rect } from 'react-native-svg';
import { scale, verticalScale, moderateScale, s } from 'react-native-size-matters';

const BACKGROUND_WIDTH_PRICE = Dimensions.get('screen').width;
const BACKGROUND_WIDTH = Dimensions.get('screen').width - 41;

const ItemList = (props) => {
    const { item, navigation,width, height } = props;
    
    const linearGradientColors = [  'rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0)'];
    // const linearGradientColors = ['white', 'rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0)'];
    const linearGradientPosition = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
    };

    
    const onDetail = () => {
        navigation.navigate('DetailsScreen', {
            post: item,
        });
    }
    const showToast = () => {
        ToastAndroid.show("Đã thêm giỏ hàng thàng công!", ToastAndroid.SHORT);
      };
    const _onDetail = () => {
		navigation.navigate("DetailsScreen")
	}
    
    let postShopingCart = async() => {
        console.log("func postShopingCart id: ");
        await Cart(item._id).then(member => {
            console.log(`postShopingCart: ${JSON.stringify(member)}`);
            Toast.showWithGravity('This is a long toast at the top.', Toast.LONG, Toast.TOP);
            // resetNavigation({ navigation: navigation, route: 'Cart'});
        }).catch(error => {
            showAlert({ title: 'Thông báo', body: 'Không thể sản phẩm vào giỏ hàng không thành công', type: 'warning' });
        });
    }
    const imageWidth = width ? width : BACKGROUND_WIDTH;
    const imageHeight = height ? height : BACKGROUND_WIDTH / 2;
    // if (width) {
    //     backgroundStyles = { ...styles.background, ...{ width: width, height: imageHeight } };
    //     linearGradientStyles = { ...styles.linearGradient, ...{ width: width, height: imageHeight } };
    //     contentContainerStyles = { ...styles.contentContainer, ...{ width: width, height: imageHeight } };
    // }

    if (item) {
        let price = formatPrice(item.price);
        return (
            <TouchableOpacity style={{ width: 180, height: 240,borderRadius: 10 }} onPress={onDetail}>
                <View style={{borderRadius: 10, marginLeft: 10,borderRadius: 10}}>
                    <Image style={{height: '100%',borderRadius: 10,}} source={{ uri: item.image }} />
                    <View style={{ position: 'absolute',flexDirection:'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={postShopingCart} style={{position:'absolute',zIndex:1,padding:10, paddingRight:20 }} >
                            <Image style={{ width:35,height:35}} source={icons.shopping_cart} />
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'flex-end',zIndex: 1,borderRadius: 10}}>
                        <View style={{borderRadius: 10, position: 'absolute',width:170}}>
                            <LinearGradient start={{x: 0.0, y: 0.9}} end={{x: 0.0, y: 0}} style= {{borderRadius: 10}}colors={linearGradientColors} >
                                <View style={{borderRadius: 10}}>
                                    <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: '800', color: 'black', marginTop: 8 }}>{item.name}</Text>
                                    <Text numberOfLines={1} style={{ fontSize: 15, color: 'black' }}>{price}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    } else {
        console.log("222222222222222222");
        return (
            <View style={styles.loadingContainer}>
                <SvgAnimatedLinearGradient height={imageHeight} width={imageWidth}>
                    <Rect x="0" y="0" rx="0" ry="0" width={imageWidth} height={imageHeight} />
                </SvgAnimatedLinearGradient>
            </View>
        )
    }
}

export default ItemList;

const styles = StyleSheet.create({
    loadingContainer: {
        ...MainStyles.card,
        // paddingHorizontal: 0,
        // paddingVertical: 0,
        // marginVertical: 15,
    },
});
