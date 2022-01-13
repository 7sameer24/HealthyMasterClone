import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, images} from '../constants';
import {genericStyles} from '../constants/genericStyles';

const CustomDrawer = props => {
  return (
    <View style={genericStyles.fill}>
      <ImageBackground source={images.Drawer} style={genericStyles.fill}>
        <DrawerContentScrollView {...props}>
          <View style={styles.View}>
            <Image source={images.avatar_5} style={styles.Image} />
            <Text style={styles.head}>Welcome</Text>
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </ImageBackground>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  Image: {
    width: 65,
    height: 65,
    backgroundColor: COLORS.darkgray,
    borderRadius: 30,
    marginLeft: 10,
  },
  head: {
    fontSize: 25,
    color: COLORS.white,
    marginTop: 10,
    left: 20,
  },
  View: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 30,
  },
});
