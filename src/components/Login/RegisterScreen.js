import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import {genericStyles} from '../../constants/genericStyles';
import {COLORS, images} from '../../constants';
import React, {useRef, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);

  const handleOnSubmit = async () => {
    if (!email || !username || !password) {
      ToastAndroid.show('Please fill all fields', ToastAndroid.SHORT);
    } else {
      try {
        await auth()
          .createUserWithEmailAndPassword(email, password, setIsLoading(true))
          .then(() => {
            firestore().collection(auth().currentUser.uid).doc('Username').set({
              name: username,
            });
          });
        Keyboard.dismiss();
        setIsLoading(false);
        navigation.navigate('HomeScreen');
        ToastAndroid.show('User added successfully', ToastAndroid.SHORT);
      } catch (error) {
        setIsLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          ToastAndroid.show(
            'That email address is already in use!',
            ToastAndroid.SHORT,
          );
        }
        if (error.code === 'auth/invalid-email') {
          ToastAndroid.show(
            'That email address is invalid!',
            ToastAndroid.SHORT,
          );
        }
        if (error.code === 'auth/weak-password') {
          ToastAndroid.show(
            'Password should be at least 6 characters',
            ToastAndroid.SHORT,
          );
        }
      }
    }
  };

  const arr = [
    {
      onChangeText: setUsername,
      placeholder: 'Username',
      value: username,
      onSubmitEditing: () => (username ? secondInput.current.focus() : null),
    },
    {
      onSubmitEditing: () => (email ? thirdInput.current.focus() : null),
      onChangeText: text => setEmail(text),
      placeholder: 'Email',
      ref: secondInput,
      value: email,
    },
    {
      IconName: visible ? 'eye-outline' : 'eye-off',
      onChangeText: text => setPassword(text),
      onPress: () => setVisible(!visible),
      secureTextEntry: visible,
      placeholder: 'Password',
      value: password,
      ref: thirdInput,
    },
  ];
  return (
    <ImageBackground
      source={images.LoginBg}
      style={styles.imageContainer}
      fadeDuration={0}>
      <KeyboardAvoidingView behavior="position">
        <Image
          source={images.AppLogo}
          containerStyle={styles.LogoContainer}
          style={styles.LogoStyle}
          fadeDuration={0}
        />
        {arr.map(data => (
          <Input
            inputContainerStyle={styles.InputContainerStyle}
            onChangeText={text => data.onChangeText(text)}
            secureTextEntry={data.secureTextEntry}
            onSubmitEditing={data.onSubmitEditing}
            placeholderTextColor={COLORS.white}
            errorStyle={genericStyles.mt(0)}
            placeholder={data.placeholder}
            inputStyle={styles.inputStyle}
            key={data.placeholder}
            value={data.value}
            ref={data.ref}
            rightIcon={{
              onPress: data.onPress,
              name: data.IconName,
              color: COLORS.white,
              type: 'ionicon',
              containerStyle: {marginRight: 10},
            }}
          />
        ))}
        <Button
          containerStyle={styles.BtncontainerStyle}
          buttonStyle={styles.buttonStyle}
          onPress={() => handleOnSubmit()}
          loading={isLoading ? true : false}
          title="Register"
        />
        <TouchableOpacity
          style={genericStyles.selfCenter}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textStyle}>Login?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegisterScreen;

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
