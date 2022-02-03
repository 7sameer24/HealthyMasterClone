import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../constants';
import {Button, colors, Image, Input} from 'react-native-elements';
import {genericStyles} from '../../constants/genericStyles';

const LoginScreen = () => {
  const [value, setvalue] = useState('');
  return (
    <ImageBackground
      source={images.LoginBg}
      style={styles.imageContainer}
      fadeDuration={0}>
      <Image
        source={images.AppLogo}
        containerStyle={styles.LogoContainer}
        style={styles.LogoStyle}
        fadeDuration={0}
      />
      <View>
        <Input
          placeholder="Mobile no."
          keyboardType="number-pad"
          inputContainerStyle={styles.InputContainerStyle}
          placeholderTextColor={colors.white}
          inputStyle={styles.inputStyle}
          errorStyle={genericStyles.mt(0)}
          value={value}
          onChangeText={text => setvalue(text)}
        />
        <Button
          title="Proceed"
          containerStyle={styles.BtncontainerStyle}
          buttonStyle={styles.buttonStyle}
        />
        <TouchableOpacity style={genericStyles.selfCenter}>
          <Text style={styles.textStyle}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={genericStyles.selfCenter}>
          <Text style={[styles.textStyle, {marginTop: 30}]}>Login With</Text>
          <View style={genericStyles.f}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
              }}
              style={styles.socialStyle}
              fadeDuration={0}
            />
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
              }}
              style={styles.socialStyle}
              fadeDuration={0}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  LogoStyle: {
    width: 150,
    height: 150,
  },
  LogoContainer: {
    alignSelf: 'center',
    marginTop: '15%',
    marginBottom: 50,
  },
  InputContainerStyle: {
    borderBottomWidth: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.success,
  },
  inputStyle: {
    color: colors.white,
    paddingVertical: 14,
    marginLeft: 10,
  },
  BtncontainerStyle: {
    marginHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: colors.success,
    paddingVertical: 13,
  },
  textStyle: {
    fontSize: 17,
    color: colors.white,
  },
  socialStyle: {
    width: 35,
    height: 35,
    marginRight: 15,
    marginTop: 10,
  },
});
