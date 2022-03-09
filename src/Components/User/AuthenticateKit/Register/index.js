import React, {Component, useState } from 'react';
import {TextInput,ScrollView, TouchableOpacity,SafeAreaView ,Text, Dimensions, Appearance, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './styles';
import _TextInput from '../../../Modules/UIKit/_TextInput';
import { register, login, resetPassword, getUcode } from '../../../../Api/UserServices';
import { showAlert, resetNavigation } from '../../../../Utils/Common';

const Login = ({navigation, props}) => {
    const deviceWidth = Dimensions.get('window').width/4 * 0.88;
    const deviceHeight = Dimensions.get('window').height;
    const [username, setUserName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [pass, setPass] = useState('');

    let user = {
        username: username,
        numPhone: phoneNum,
        password: pass,
    }

    const onPress = () => {
        register(user).then(member => {
            resetNavigation({ navigation: navigation, route: 'BottomTab'});
        }).catch(error => {
            showAlert({ title: 'Thông báo', body: 'Đăng nhập không thành công', type: 'warning' });
        });
    };
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
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
                                <Text style = {style.text}>Tên người dùng</Text>
                                <View style = {style.acction}>
                                    <TextInput
                                        style={style.input}
                                        onChangeText= {(username) => {setUserName(username)}}
                                    />
                                </View>
                            </View>
                            <View style = {{paddingHorizontal: 20}}>
                                <Text style = {style.text}>Số điện thoại </Text>
                                <View style = {style.acction}>
                                    <TextInput
                                        style={style.input}
                                        keyboardType="numeric"
                                        onChangeText= {(num) => {setPhoneNum(num)}}
                                    />
                                </View>
                            </View>
                            <View style = {{paddingHorizontal: 20, marginTop: 10}}>
                                <Text style = {style.text}>Mật khẩu</Text>
                                <View style = {style.acction}>
                                    <TextInput style = {style.input}
                                        secureTextEntry={true}
                                        onChangeText= {(pass) => {setPass(pass)}}
                                        />
                                </View>
                            </View>
                            <View style = {style.button}>
                                <TouchableOpacity
                                    style={style.btnLogin}
                                    onPress={onPress}>
                                    <Text style = {style.textBtnLogin}>Đăng ký</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;
