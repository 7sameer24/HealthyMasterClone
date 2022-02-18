import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { genericStyles } from '../../constants/genericStyles';
import { Image } from 'react-native-elements';
import { COLORS } from '../../constants';

const LoginWithSocial = () => {
  return (
    <View style={genericStyles.selfCenter}>
      <Text style={styles.textStyle}>Login With</Text>
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
  );
};

export default LoginWithSocial;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 17,
    color: COLORS.white,
    marginTop: 30,
    alignSelf: 'center',
  },
  socialStyle: {
    width: 35,
    height: 35,
    marginRight: 5,
    marginTop: 10,
  },
});
