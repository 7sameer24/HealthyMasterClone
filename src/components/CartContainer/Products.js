import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Products = products => {
  //   console.log(products.products.name);
  return (
    <View>
      <Text>{products.products.name}</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
