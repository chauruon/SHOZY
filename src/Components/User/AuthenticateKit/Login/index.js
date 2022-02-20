import React, {Component, useState } from 'react';
import {TextInput,Switch, StyleSheet, TouchableOpacity,SafeAreaView ,Text, Dimensions, Appearance, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './styles';
import _TextInput from '../../../Modules/UIKit/_TextInput';

const Login = ({props,navigation }) => {
    const deviceWidth = Dimensions.get('window').width/4 * 0.88;
    const deviceHeight = Dimensions.get('window').height;
    const [username, setUserName] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const onPress = () => {
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.viewall}>
                <LinearGradient style={style.container} colors={['#082d3e','#86aec0']}>
                    <View style={style.header}>
                        <View style = {{flex:1, alignItems: 'flex-end'}}>
                            <View style = {{marginTop: deviceWidth, flexDirection: 'row'}}>
                                <View style= {{flex:1.5, backgroundColor: 'rgb(24,61,89)'}}></View>
                                <Text style={style.titleWellcome}>Wellcome Back!</Text>
                            </View>
                        </View>
                        <View style = {{flex:1,alignItems: 'flex-start',flexDirection:'row', marginBottom:'6%'}}>
                            <View style = {{flexDirection:'row'}}>
                                <View style= {{flex:2.2 ,width: deviceWidth + 30,backgroundColor: '#3b5d76'}}></View>
                                <Text style={style.titleWellcome}>Login your Account</Text>
                            </View>
                        </View>
                    </View>
                    <View style={style.footer}>
                        <View style = {{paddingHorizontal: 20}}>
                            <Text style = {style.text}>Số điện thoại </Text>
                            <View style = {style.acction}>
                                <TextInput
                                    style={style.input}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>
                        <View style = {{paddingHorizontal: 20, marginTop: 10}}>
                            <Text style = {style.text}>Mật khẩu</Text>
                            <View style = {style.acction}>
                                <TextInput style = {style.input}
                                    secureTextEntry={true}
                                    // value={username}
                                    />
                            </View>
                        </View>
                        <View style = {style.userinfo}>
                            <View style = {style.remember}>
                                <Switch
                                    trackColor={{ false: "#b7b7b6", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                />
                                <Text style = {{marginTop:3}, style.text}>Ghi nhớ</Text>
                            </View>
                            <View style = {style.forgotpass}>
                                <TouchableOpacity >
                                    <Text style = {style.text}>Quên mật khẩu!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {style.button}>
                            <TouchableOpacity
                                style={style.btnLogin}
                                // onPress={onPress}
                            >
                                <Text style = {style.textBtnLogin}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {{alignItems:'center', marginTop: 15 }}>
                            <View style = {{flexDirection:'row',paddingHorizontal:20}}>
                                <Text style = {{fontSize: 18, marginTop:8}}>Không có tài khoảng?</Text>
                                <TouchableOpacity onPress={onPress}>
                                    <Text style = {style.textDontHaveAccoutn}>Đăng ký</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </SafeAreaView>
    );
}

export default Login;
