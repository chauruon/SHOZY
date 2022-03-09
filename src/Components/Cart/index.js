import React, {Component, useState } from 'react';
import {Animated,Icon, Image ,StyleSheet,Text, View} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import styles from './styles';

const Cart = (props) => {
    renderRightAction = (icon, color) => {
        // const trans = dragX.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [x,1],
        // });
        return(
            <Animated.View style = {{flex: 1}}>
                <RectButton style = {styles.rightAction}>
                    <Icon name= {icon} color= {color} size= {30}/>
                </RectButton>
            </Animated.View>
        );
    }

    renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 50, 100, 101],
          outputRange: [-20, 0, 0, 1],
        });
        return (
          <RectButton style={styles.rightAction} onPress={this.close}>
            <Animated.Text
              style={[
                // styles.actionText,
                {
                  transform: [{ translateX: trans }],
                },
              ]}>
              Archive
            </Animated.Text>
          </RectButton>
        );
      };
    const renderRightActions = process => {
        return (
            <View style = {{width:192, flexDirection:'row'}}>
                {this.renderRightAction(require('../../Assets/icon/menu.png'),'#000000', '#eeeeee', 192, process)}
                {this.renderRightAction(require('../../Assets/icon/bell.png'), '#000000', '#cccccc', 192, process)}
                {this.renderRightAction(require('../../Assets/icon/delete.png'), '#ffffff', '#dd2c00', 192, process)}
            </View>
        )
    }

    return (
        <Swipeable
        renderLeftActions = {this.renderLeftActions}>
             <Text style = {{fontSize: 20, fontWeight: 'bold'}}>"hello"</Text>
            {/* <View style = {styles.item}>
                <Image source={require('../../Assets/hinhnen.jpg')}
                    style = {styles.image} />
                <View>
                    <Text style = {styles.name}>
                        b2s
                    </Text>
                    <Text style = {styles.message}>
                        sdfdsfsdsf
                    </Text>
                </View>
            </View> */}
        </Swipeable>
    )
}

export default Cart;

const styles = StyleSheet.create({
    item: {
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    message: {
        color: 'gray',
        fontSize: 14,
        marginTop: 3,
    },
    rightAction:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
        backgroundColor: 'red'
    },
});
