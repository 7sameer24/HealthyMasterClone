import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Products from './Products';

const AddCartScreen = () => {
  // console.log('hlwww', cart);
  // console.log('wpwpwppwpw', CartItems.cart);

  return (
    <View style={styles.container}>
      {/* <Products products={CartItems.cart} /> */}
    </View>
  );
};

export default AddCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
