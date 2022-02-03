import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, images} from '../../constants';
import {genericStyles} from '../../constants/genericStyles';
import SocialMedia from '../../constants/SocialMediaIcons';
import {Button, colors} from 'react-native-elements';

const CustomDrawer = props => {
  return (
    <View style={genericStyles.fill}>
      <ImageBackground
        source={images.Drawer}
        style={genericStyles.fill}
        blurRadius={0}
        fadeDuration={0}>
        <DrawerContentScrollView {...props}>
          <View style={styles.View}>
            <Image source={images.avatar_5} style={styles.Image} />
            <View style={genericStyles.FD('column')}>
              <Text style={styles.head}>Welcome</Text>
              <Button
                title="Login"
                type="clear"
                containerStyle={styles.btnContainer}
                titleStyle={styles.titleStyle}
                onPress={() => props.navigation.navigate('Login')}
              />
            </View>
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={genericStyles.bottom(13)}>
          <Text style={styles.OurP}>Our Presence</Text>
          <View style={styles.View2}>
            {SocialMedia.map(_ => (
              <Image
                key={_.id}
                source={{uri: _.IconName}}
                style={styles.image}
              />
            ))}
          </View>
          <Text style={styles.OurP}>App version: 2.0.4</Text>
        </View>
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
    marginTop: 10,
    marginBottom: 5,
  },
  OurP: {
    color: COLORS.black,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 35,
    height: 35,
    marginVertical: 5,
  },
  btnContainer: {
    width: 70,
    alignSelf: 'center',
    marginLeft: 30,
  },
  titleStyle: {
    color: colors.success,
    fontSize: 18,
  },
});
