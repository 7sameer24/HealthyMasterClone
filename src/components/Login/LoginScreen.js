import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, images} from '../../constants';
import {Button, Image, Input} from 'react-native-elements';
import {genericStyles} from '../../constants/genericStyles';
import LoginWithSocial from './LoginWithSocial';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const secondInput = useRef(null);

  const handleOnSubmit = async () => {
    if (!email || !password) {
      ToastAndroid.show('Please fill all fields', ToastAndroid.SHORT);
    } else {
      try {
        await auth().signInWithEmailAndPassword(
          email,
          password,
          setIsLoading(true),
        );
        Keyboard.dismiss();
        setIsLoading(false);
        navigation.navigate('HomeScreen');
        ToastAndroid.show('Login successfully', ToastAndroid.SHORT);
      } catch (error) {
        setIsLoading(false);
        if (error.code === 'auth/wrong-password') {
          ToastAndroid.show(
            'The password is invalid or the user does not have a password.',
            ToastAndroid.SHORT,
          );
        }
        if (error.code === 'auth/invalid-email') {
          ToastAndroid.show(
            'The email address is badly formatted.',
            ToastAndroid.SHORT,
          );
        }
        if (error.code === 'auth/user-not-found') {
          ToastAndroid.show(
            'There is no user record corresponding to this identifier.',
            ToastAndroid.SHORT,
          );
        }
      }
    }
  };
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
          onSubmitEditing={() => (email ? secondInput.current.focus() : null)}
          inputContainerStyle={styles.InputContainerStyle}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={COLORS.white}
          errorStyle={genericStyles.mt(0)}
          inputStyle={styles.inputStyle}
          returnKeyType="next"
          placeholder="Email"
          value={email}
        />
        <Input
          inputContainerStyle={styles.InputContainerStyle}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={COLORS.white}
          errorStyle={genericStyles.mt(0)}
          inputStyle={styles.inputStyle}
          secureTextEntry={visible}
          placeholder="Password"
          ref={secondInput}
          value={password}
          rightIcon={{
            name: visible ? 'eye-outline' : 'eye-off',
            onPress: () => setVisible(!visible),
            color: COLORS.white,
            type: 'ionicon',
            containerStyle: {marginRight: 10},
          }}
        />
        <Button
          title="Proceed"
          containerStyle={styles.BtncontainerStyle}
          buttonStyle={styles.buttonStyle}
          onPress={() => handleOnSubmit()}
          loading={isLoading ? true : false}
        />
        <TouchableOpacity
          style={genericStyles.selfCenter}
          onPress={() => {
            navigation.navigate('Register'), setEmail(''), setPassword('');
          }}>
          <Text style={styles.textStyle}>Register?</Text>
        </TouchableOpacity>
        <LoginWithSocial />
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
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.success,
  },
  inputStyle: {
    color: COLORS.white,
    paddingVertical: 14,
    marginLeft: 10,
  },
  BtncontainerStyle: {
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 5,
    width: '95%',
  },
  buttonStyle: {
    backgroundColor: COLORS.success,
    paddingVertical: 13,
  },
  textStyle: {
    fontSize: 17,
    color: COLORS.white,
  },
});
