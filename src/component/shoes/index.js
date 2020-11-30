import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function shoes(props) {
  function filterDesc(desc){
    if(desc.length < 22){
      return desc;
    }
    return `${desc.substring(0, 20)}...`; 
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={props.img}
        style={styles.shoesImage}
      />
      <Text style={styles.shoesText}> {filterDesc(props.children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.shoesText}>{props.cost}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoesImage: {
    width: 175,
    height: 175,
  },
  shoesText: {
    fontSize: 16,
  }
});