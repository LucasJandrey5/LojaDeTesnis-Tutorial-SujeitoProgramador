import React from 'react'

import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { max } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../../component/shoes/index';
import Product from '../../component/product/index';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#AAA' }]}>•</Text>
          <Text style={[styles.text, { color: '#AAA' }]}>MASCULINO</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 10, alignSelf: 'center' }}>
            <MaterialIcons
              name={'filter-list'}
              size={32}
              color='#000'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <ScrollView>
          <Text style={styles.text}>LANÇAMENTOS</Text>
          <Product />
          <Product />
        </ScrollView>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',

  },
  text: {
    marginHorizontal: '1%',
    fontSize: 26,
    fontFamily: 'Anton_400Regular',
    alignSelf: 'flex-start',
  },
  line: {
    borderBottomColor: '#cececf',
    borderBottomWidth: 2,
  }
});
