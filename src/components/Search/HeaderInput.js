import {StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {colors, Input} from 'react-native-elements';
import {genericStyles} from '../../constants/genericStyles';
import {COLORS} from '../../constants';
import AnyIcon from '../MainComponents/AnyIcon';

const HeaderInput = ({value, onChangeText, New}) => {
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Search"
        inputContainerStyle={styles.InputContainerStyle}
        inputStyle={[genericStyles.m(0), {color: colors.white}]}
        placeholderTextColor={COLORS.white}
        errorStyle={styles.errorStyle}
        value={value}
        onChangeText={onChangeText}
        ref={inputFocus}
      />
      <AnyIcon
        name="mic"
        type="ionicon"
        color={colors.white}
        size={25}
        containerStyle={styles.containerStyle}
        onPress={() => alert('Not available')}
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
    // top: 5,
    right: 30,
  },
  errorStyle: {
    margin: 0,
    fontSize: 0,
  },
  containerStyle: {
    right: 75,
    top: 12,
  },
});
