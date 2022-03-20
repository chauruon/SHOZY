import { StyleSheet, SafeAreaView, Button, View,Text } from 'react-native';
import React from 'react';
// import styles from './styles';
import {Avatar, Titlem, Caption, TouchableRipple, Title,} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import { Icon } from 'native-base';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop:15}}>
          <Avatar.Image
            source={{
              uri: 'https://tosuphoto.com/wp-content/uploads/2018/04/anh-chan-dung-cua-Rehahn.jpg',
            }}
            size={80}
          />
          <View style={{marginTop:50}}>
           <Avatar.Image
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/512/2740/premium/2740651.png?token=exp=1647049168~hmac=39f3dc20e186dca7b42b339a74109504',
            }}
            size={25}
          />
          </View>
          <View style={{marginLeft: 20,}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom:5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@j_do</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
            <Icon name="bath" color='#777777' size={20}/>
            <Text style={{color:'#777777', marginLeft: 20,}}>Johnny Dang</Text>
           
        </View>
        <View style={styles.row}>
            <Icon name="map-marker-radius" color='#777777' size={20}>
            <Text style={{color:'#777777', marginLeft: 20,}}>JNDang@mgail.com</Text>
            </Icon>
        </View>
        <View style={styles.row}>
            <Icon name="map-marker-radius" color='#777777' size={20}>
            <Text style={{color:'#777777', marginLeft: 20,}}>012399999</Text>
            </Icon>
        </View>
        <View style={styles.row}>

            <Icon type="FontAwesome5" name="house-user"/>
            <Icon name="map-marker-radius" color='#777777' size={20}>
            <Text style={{color:'#777777', marginLeft: 20,}}>012399999</Text>
            </Icon>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 10,
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