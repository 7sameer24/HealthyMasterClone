import {StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Icon, Input} from 'react-native-elements';
import {genericStyles} from '../../constants/genericStyles';
import {COLORS} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const HeaderInput = ({value, onChangeText, onPress}) => {
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="arrow-back-outline"
        type="ionicon"
        onPress={onPress}
        color="#fff"
        containerStyle={styles.IconConStyle}
        size={25}
      />
      <Input
        placeholder="Search"
        inputContainerStyle={styles.InputContainerStyle}
        inputStyle={[genericStyles.m(0), {color: COLORS.white}]}
        placeholderTextColor={COLORS.white}
        errorStyle={styles.errorStyle}
        value={value}
        onChangeText={onChangeText}
        ref={inputFocus}
      />
      <Icon
        name="mic"
        type="ionicon"
        color={COLORS.white}
        size={25}
        containerStyle={styles.containerStyle}
        onPress={() => alert('Not available')}
      />
    </SafeAreaView>
  );
};

export default HeaderInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.success,
  },
  InputContainerStyle: {
    borderBottomWidth: 0,
    width: 300,
  },
  errorStyle: {
    margin: 0,
    fontSize: 0,
  },
  containerStyle: {
    right: 80,
    alignSelf: 'center',
  },
  IconConStyle: {
    marginTop: 10,
    marginLeft: 10,
  },
});
