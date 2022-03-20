import { View, Text, SafeAreaView, Image,TouchableOpacity } from 'react-native'
import React from 'react'

import { icons } from '../../Components/Constants';

const DetailsItems = () => {

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={{ width: '100%', height: '50%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: 'gray' }}>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: '95%', height: '99%', borderRadius: 20 }} source={icons.backgroundDetail} />
        </View>

      </View>
      <View style={{ width: '100%', height: '40%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: '#ffffff' }}>
        <View>
          <Text style={{ fontSize: 30, marginLeft: 20, marginTop: 10 }}>Nike Air Zoom</Text>
          <Text style={{ fontSize: 15, marginTop: 30, marginLeft: 20 }}>The Nike Air Zoom Pegasus Torbu 2
            is updated with featherlight upper, white
            innovative foam brings revolutionary</Text>
          <Text style={{ fontSize: 40, marginTop: 60, marginLeft: 20, fontWeight: '500' }}>{'$'}239</Text>

        </View>
      </View>
      <View style={{ width: '100%', height: '10%', backgroundColor: '#f0911a', flexDirection: 'row' }}>

        <TouchableOpacity style={{ width: '30%', backgroundColor: '#1bedf0',alignItems:'center',justifyContent: 'center'}}>
          <Image source={icons.pluscart} />
        </TouchableOpacity>
        <TouchableOpacity style={{width:'70%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, color: 'white' }}>MUA NGAY</Text>
        </TouchableOpacity>
       
      </View>
    </SafeAreaView>
  )
}

export default DetailsItems;