import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, Input} from 'react-native-elements';
import {genericStyles} from '../constants/genericStyles';
import {COLORS} from '../constants';
import AnyIcon from './AnyIcon';

const HeaderInput = () => {
  const [value, setValue] = useState('');
  //   useEffect(() => {
  //     <Input />;
  //   }, []);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Search"
        inputContainerStyle={styles.InputContainerStyle}
        inputStyle={genericStyles.m(0)}
        placeholderTextColor={COLORS.white}
        errorStyle={styles.errorStyle}
        autoFocus={true}
        value={value}
        onChangeText={text => setValue(text)}
      />
      <AnyIcon
        name="mic"
        type="ionicon"
        color={colors.white}
        size={25}
        containerStyle={styles.containerStyle}
      />
    </View>
  );
};

export default HeaderInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  InputContainerStyle: {
    borderBottomWidth: 0,
    width: 300,
    top: 5,
    right: 30,
  },
  errorStyle: {
    margin: 0,
    left: 5,
  },
  containerStyle: {
    right: 75,
    top: 15,
  },
});
