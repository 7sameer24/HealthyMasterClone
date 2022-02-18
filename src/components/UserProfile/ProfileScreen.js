import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, images } from '../../constants';
import { Icon, Image, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const ProfileScreen = ({ route, navigation }) => {
  const { Name, Email } = route.params;
  const [isLoading, setisLoading] = useState(false);
  const handleOnSubmit = () => {
    setisLoading(true);
    auth()
      .signOut()
      .then(() => {
        setisLoading(false);
        navigation.navigate('HomeScreen');
        ToastAndroid.show('Logout successfully', ToastAndroid.SHORT);
      });
  };
  return (
    <View>
      <Image
        source={images.avatar_5}
        style={styles.Image}
        containerStyle={styles.ImageContanier}
      />
      <View style={styles.UsernameContainer}>
        <Icon
          name="person"
          type="ionicon"
          size={22}
          backgroundColor={COLORS.success}
          color={COLORS.white}
          iconStyle={styles.iconStyle}
        />
        <Text
          style={styles.TextStyle}
          numberOfLines={1}
          ellipsizeMode="tail">{`Username: ${Name}`}</Text>
      </View>
      <View style={styles.UsernameContainer}>
        <Icon
          name="mail"
          type="ionicon"
          size={22}
          backgroundColor={COLORS.success}
          color={COLORS.white}
          iconStyle={styles.iconStyle}
        />
        <Text
          style={styles.TextStyle}
          numberOfLines={1}
          ellipsizeMode="tail">{`Email: ${Email}`}</Text>
      </View>
      <Button
        title="SignOut"
        containerStyle={styles.BtncontainerStyle}
        buttonStyle={styles.buttonStyle}
        onPress={() => handleOnSubmit()}
        loading={isLoading ? true : false}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: COLORS.success,
    borderWidth: 1,
  },
  ImageContanier: {
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: '10%',
  },
  UsernameContainer: {
    flexDirection: 'row',
    borderColor: COLORS.success,
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  TextStyle: {
    fontSize: 18,
    // fontWeight: '500',
    marginLeft: 10,
    color: COLORS.darkgray,
    width: '80%',
  },
  iconStyle: {
    padding: 7,
    borderRadius: 5,
  },
  BtncontainerStyle: {
    alignSelf: 'center',
    borderRadius: 10,
    width: '90%',
  },
  buttonStyle: {
    backgroundColor: COLORS.success,
    paddingVertical: 13,
  },
});
