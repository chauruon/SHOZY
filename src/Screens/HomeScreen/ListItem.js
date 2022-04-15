import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainStyles from '../../Public/MainStyles';
import { Icon } from 'native-base';
import MainConstants from '../../Public/MainConstants';
import { formatPrice } from '../../../../Utils/Common';
import _Image from "../../Components/Modules/UIKit/_Image";
// import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import Svg, { Circle, Rect } from 'react-native-svg';
import { scale, verticalScale, moderateScale, s } from 'react-native-size-matters';

const BACKGROUND_WIDTH_PRICE = Dimensions.get('screen').width;
const BACKGROUND_WIDTH = Dimensions.get('screen').width - 41;
const Reward_height = (Dimensions.get('window').height/33) * 0.2 + 7.9 ;
const Reward_width = (Dimensions.get('window').width/33) *0.2 - 32.4;
const containerReward_height = (Dimensions.get('window').height/33) * 0.2 + 2;
const ListItem = (props) => {
    const { item, navigation, width, height } = props;
    
    const linearGradientColors = [  'rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0)'];
    // const linearGradientColors = ['white', 'rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0)'];
    const linearGradientPosition = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
    };
    let banner = null;

    const onDetail = () => {
        navigation.navigate('DetailsScreen', {
            post: item,
        });
    }
    let backgroundStyles = styles.backgroundImage;
    let linearGradientStyles = styles.linearGradient;
    let contentContainerStyles = styles.contentContainer;
    const imageWidth = width ? width : BACKGROUND_WIDTH;
    const imageHeight = height ? height : BACKGROUND_WIDTH / 2;
    if (width) {
        backgroundStyles = { ...styles.background, ...{ width: width, height: imageHeight } };
        linearGradientStyles = { ...styles.linearGradient, ...{ width: width, height: imageHeight } };
        contentContainerStyles = { ...styles.contentContainer, ...{ width: width, height: imageHeight } };
    }

    if (item) {
       
        if (item.medias && item.medias.length > 0) {
            banner = { uri: item.medias[0].source };
        }
        let addressStr = '';
        item.address && (addressStr += `${item.address} `);
        item.ward_name && (addressStr += `${item.ward_name} `);
        item.district_name && (addressStr += `${item.district_name} `);
        item.city_name && (addressStr += `${item.city_name}`);
        return (
            <TouchableOpacity style={styles.container} onPress={onDetail}>
                <View>
                    <View>
                        <_Image  
                            source={banner} 
                            resizeMode="cover" 
                            width={imageWidth} 
                            height={imageHeight} />

                        
                        <View style={styles.container1}>
                            <View style={styles.containerReward}>
                                <Text style={styles.content}>Thưởng</Text>
                                <View style = {styles.containerNum}>
                                    <View style = { styles.numRewardView}>
                                        <Text style={styles.numReward}>{item.introduce_fee}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style = {styles.card}> 
                            <View style = {styles.itemCard}>
                                <View style = {styles.contentPrice}>        
                                    <Icon type="FontAwesome5" name="dollar-sign" style={styles.priceIcon} /> 
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                        
                        <View style={styles.purposeContainer}>
                            <Text style={styles.contentType}>{item.purpose_name}</Text>
                        </View>
                    </View>
                    


                    <View>
                        <View style = {styles.contentCode}>
                            <Text style={styles.codeText}>Mã tin:</Text>
                            <Text style={styles.code}>{item.code}</Text>
                        </View>
                        
                        <Text numberOfLines={2} style={styles.address}>
                            <Icon type="FontAwesome5" name="map-marker-alt" style={styles.addressIcon} />
                            {` ${addressStr}`}
                        </Text>
                        <View style = {{flexDirection:'row',paddingVertical:4,marginLeft:3,}}>
                            <View style={styles.dimensionContainer}>
                                <Text style={styles.dimension}>{item.square}m</Text>
                                <Text style={styles.supText}>2</Text>
                            </View>
                            {item.bedroom_num ?
                                <View style={styles.moreInfoContainer}>
                                    <Icon type="FontAwesome5" name="bed" style={styles.moreInfoIcon} />
                                    <Text style={styles.moreInfo}>{item.bedroom_num}</Text>
                                </View>
                                : null}

                                {item.bathroom_num ?
                                    <View style={styles.moreInfoContainer}>
                                        <Icon type="FontAwesome5" name="bath" style={styles.moreInfoIcon} />
                                        <Text style={styles.moreInfo}>{item.bathroom_num}</Text>
                                    </View>
                                : null}
                                {item.direction_name ?
                                    <View style={styles.moreInfoContainer}>
                                        <Icon type="FontAwesome5" name="compass" style={styles.moreInfoIcon} />
                                        <Text style={styles.moreInfo}>{item.direction_name}</Text>
                                    </View>
                                : null}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    } else {
        return (
            <View style={styles.loadingContainer}>
                <SvgAnimatedLinearGradient height={imageHeight} width={imageWidth}>
                    <Rect x="0" y="0" rx="0" ry="0" width={imageWidth} height={imageHeight} />
                </SvgAnimatedLinearGradient>
            </View>
        )
    }
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        ...MainStyles.card,
        paddingVertical: 0,
        marginVertical: 7.5,
        // marginHorizontal: 20,
    },
    container1: {
        ...Platform.select({
            ios: {
                flex: 1,
                transform: [{ rotate: '45 deg'}],
                //top: (width * 2) / 9 -  scale(111),
                top:'-11.6%',
                right:-(18.3/100)- 47.9,
                position: 'absolute',
                height:80,
                width:135,
                backgroundColor: "transparent",
                borderStyle: "solid",
                borderLeftColor: "transparent",
                borderLeftWidth: 35,
                borderRightColor: "transparent",
                borderRightWidth: 35,
                borderBottomWidth: 35,// do day khung
                borderBottomColor: "red",
            },
            android: {
                transform: [{ rotate: '45 deg'}],
                top: Reward_height,
                //top:'6.8%',
                right: Reward_width,
                //right: '-11.8%',
                aspectRatio:3/2,
                backgroundColor: 'transparent',
                position: 'absolute',
                height:20,
                width:120,
                borderBottomWidth: 35,// độ rộng của nó
                borderBottomColor: MainConstants.RedColor1,
                borderLeftWidth: 35,
                borderLeftColor: 'transparent',
                borderRightWidth: 35,
                borderRightColor: 'transparent',
                borderStyle: 'solid',
            }
        })
    },
    containerReward:{
        ...Platform.select({
            ios:{
                alignItems: 'center',
                justifyContent: 'center',
                //top:(height/4) - moderateScale(43,2.2),
                top : '120%'
            },
            android: {
                alignItems: 'center',
                justifyContent: 'center',
                //top:'140%',
                top:containerReward_height,
            }
        })
    },
    content:{
        ...Platform.select({
            ios:{
                marginTop:-6,
                fontWeight: 'bold',
                fontSize: 11,
                color: 'white',
            },
            android: {
                //backgroundColor: '#17fcd9',
                marginTop:3,
                fontWeight: 'bold',
                fontSize: 11,
                color: 'white',
            }
        })
    },
    containerNum:{
        ...Platform.select({
            ios:{
                width: 130,
                alignItems: 'center',
               // backgroundColor: '#17fcd9',
            },
            android:{
                width: 130,
                alignItems: 'center',
                //backgroundColor: '#fccb00',
            }
        })
       
    },
    numRewardView:{
        ...Platform.select({
            android:{
                alignItems: 'center',
                marginTop:3,
                //backgroundColor: '#d6db00'
            },
            ios:{
                alignItems: 'center',
                backgroundColor: '#d6db00'
            }
        })
    },
    numReward: {
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        //backgroundColor:"#8D1EEE",
        color: 'white',
    },
    contentType: {
        ...Platform.select({
            ios:{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop:0,
                fontWeight: 'bold',
                fontSize: 13,
                paddingHorizontal:4,
                color: 'white',
            },
            android: {
                marginTop:-2,
                fontWeight: 'bold',
                fontSize: 11,
                color: 'white',
            }
        })
    },
    purposeContainer: {
        ...Platform.select({
            ios:{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                right: 0,
                bottom: 10,
                height:24,
                backgroundColor: MainConstants.RedColor1,
                paddingHorizontal:3.5,
                borderTopLeftRadius: 7,
            },
            android: {
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                right: 0,
                bottom: 10,
                height:20,
                backgroundColor: MainConstants.RedColor1,
                paddingHorizontal: 7.5,
                paddingVertical: 1,
                borderTopLeftRadius: 7,
            }
        })
    },
    loadingContainer: {
        ...MainStyles.card,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginVertical: 15,
    },
    contentCode: {
        ...Platform.select({
            ios: {
                flexDirection:'row',
                marginTop:5,
                marginLeft: 0,
            },
            android: {
                flexDirection:'row',
                marginTop:3,
                marginLeft:0,
            }
        })
    },
    codeText: {
        fontSize: 13,
        marginLeft:7,
    },
    code: {
        fontWeight: 'bold',
        fontSize: 13,
        marginLeft:4,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 5,
    },
    backgroundImage: {
        borderRadius: 10,
        width: BACKGROUND_WIDTH,
        height: BACKGROUND_WIDTH / 2,
        resizeMode: 'cover',
    },
    linearGradient: {
        width: BACKGROUND_WIDTH,
        height: BACKGROUND_WIDTH / 2,
        borderRadius: 5,
    },
    contentContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    
    address: {
        fontSize: 12,
        //color: 'gray',
        marginTop:3,
        marginLeft:7.7,
    },
    addressIcon: {
        fontSize: 12,
        // color: 'gray',
    },
    additionInfoContainer: {
        position: 'absolute',
        bottom: 15,
        left: 20,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: -10,
        marginLeft:7,
        //backgroundColor: "#BEFD01"
    },
    itemCard:{
        shadowColor: '#ccc',
        shadowOpacity: 0.8,
        shadowRadius: 2.5,
        elevation: 2,
        borderRadius: 3,
        borderColor: '#eee',
        backgroundColor: 'white',
        height:20,
    },
    contentPrice:{
        paddingHorizontal: 5,
        flexDirection:'row',
        fontSize: 12,
        color: MainConstants.PurpleColor4,
    },
    price: {
        fontSize: 14,
        color: MainConstants.PurpleColor4,
        marginLeft: 2,
    },
    priceIconContainer: {
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: MainConstants.PurpleColor4,
        borderRadius: 22,
    },
    priceIcon: {
        marginTop:3,
        fontSize: 12,
        color: MainConstants.PurpleColor4,
    },
    dimensionContainer: {
        flexDirection: 'row',
        marginLeft: 2,
    },
    dimension: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'gray',
        marginLeft: 2.5,
    },
    dimensionIconContainer: {
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: MainConstants.PurpleColor4,
        borderRadius: 22,
    },
    dimensionIcon: {
        fontSize: 12,
        color: MainConstants.PurpleColor4,
    },
    supText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: 'gray',
        lineHeight: 10,
    },
    moreInfoGroup: {
        flexDirection: 'row',
        marginTop: 10,
    },
    moreInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5,
        marginLeft:10,
    },
    moreInfoIcon: {
        fontSize: 18,
        color: 'gray',
    },
    moreInfo: {
        marginLeft: 5,
        color: 'gray',
        fontSize: 13,
    },
});
