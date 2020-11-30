import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import Shoes from '../../component/shoes/index';

export default function product() {
  return (

    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Shoes img={require('../../assets/1.png')} cost='R$140,90'>Max Super Shoes</Shoes>
      <Shoes img={require('../../assets/2.png')} cost='R$199,90'>Air Band Top</Shoes>
    </View>
  );
}

