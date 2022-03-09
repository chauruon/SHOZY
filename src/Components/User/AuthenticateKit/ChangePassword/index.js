import React, {Component, useState } from 'react';
import {TextInput,TouchableOpacity,SafeAreaView ,Text, Dimensions,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './styles';
import _TextInput from '../../../Modules/UIKit/_TextInput';

const ChangePassword = ({navigation, props}) => {
    const deviceWidth = Dimensions.get('window').width/4 * 0.88;
    const deviceHeight = Dimensions.get('window').height;
    const [username, setUserName] = useState('');
    const onPress = () => {
        navigation.navigate('Login');
    };
    return (
        <SafeAreaView style={style.container}>
            <View style={style.viewall}>
                <LinearGradient style={style.container} colors={['#082d3e','#86aec0']}>
                    <View style={style.header}>                    
                        <View style = {{flex:1, alignItems: 'flex-end'}}>
                            <View style = {{marginTop: deviceWidth, flexDirection: 'row'}}>
                                <View style= {{flex:1, backgroundColor: 'black',marginBottom:20}}></View>
                                <Text style={style.titleWellcome}>ChangePassword!</Text>
                            </View>
                        </View>                       
                    </View>
                    <View style={style.footer}>
                    <View style = {{paddingHorizontal: 20}}>
                            <Text style = {style.text}>Email</Text>
                            <View style = {style.acction}>
                                <TextInput
                                 placeholder="Enter your Email"></TextInput>
                            </View>
                        </View> 
                        <View style = {style.button}>
                            <TouchableOpacity
                                style={style.btnLogin}
                                onPress={onPress}>
                                <Text style = {style.textBtnLogin}>ResetPassword</Text>
                            </TouchableOpacity>
                            <View style={{alignItems: 'center',marginTop:90,}}>
                            <Text style={{fontWeight:'bold'}}>Don't have account?Sign up</Text>
                            </View>
                        </View>
                    </View>
                
                </LinearGradient>
            </View>
        </SafeAreaView>
    );
}

export default ChangePassword;
