import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Banner = ({source, style}) => {
  return <Image source={source} style={[styles.image, {...style}]} />;
};

export default Banner;

const styles = StyleSheet.create({
  image: {
    width: '98%',
    height: 65,
    bottom: 40,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
