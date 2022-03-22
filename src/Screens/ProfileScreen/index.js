import { StyleSheet, SafeAreaView, Image, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
// import styles from './styles';
import { Avatar, Titlem, Caption, TouchableRipple, Title, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons } from '../../Components/Constants';

// import { Icon } from 'native-base';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 15 }}>
          <Avatar.Image
            source={icons.avt}size={80} />
          <View style={{ marginLeft: 20, alignItems: 'center' }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>ABC</Title>
            <Caption style={styles.caption}>@abc</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
          <TouchableOpacity style={styles.row}>
            <Image style={{ marginLeft: 20, }} source={icons.plus} size={20} />
            <Text style={{ color: 'black', marginLeft: 20, fontSize:17}}>Johnny Dang</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Image style={{ marginLeft: 20, }} source={icons.plus} size={20} />
            <Text style={{ color: 'black', marginLeft: 20, fontSize:17}}>JNDang@mgail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Image style={{ marginLeft: 20, }} source={icons.key} size={20} />
            <Text style={{ color: 'black', marginLeft: 20, fontSize:17}}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Image style={{ marginLeft: 20, }} source={icons.logout} size={20} />
            <Text style={{ color: 'black', marginLeft: 20, fontSize:17}}>Log Out</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#dddddd',
    height: 50,
    alignItems: 'center',
    borderRadius: 20
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26
  },
});