import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Banner = () => {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      }}
      style={styles.image}
    />
  );
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
