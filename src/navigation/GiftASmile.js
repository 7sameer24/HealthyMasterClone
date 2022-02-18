import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CommonHeader from '../components/MainComponents/CommonHeader';
import {COLORS} from '../constants';

const GiftASmile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CommonHeader onPress={() => navigation.goBack()} item="Gift a Smile" />
      <TouchableOpacity
        onPress={() => navigation.navigate('Gift By Occasion')}
        style={styles.textStyle}>
        <Text style={styles.text}>Gift By Occasion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Gift By Festival')}
        style={styles.textStyle}>
        <Text style={styles.text}>Gift By Festival</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GiftASmile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  textStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray2,
  },
  text: {
    padding: 12,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});
