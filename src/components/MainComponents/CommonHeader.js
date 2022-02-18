import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants';

const CommonHeader = ({onPress, style, iconStyle, containerStyle, item}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <Icon
        name="arrow-back-outline"
        type="ionicon"
        onPress={onPress}
        color="#fff"
        style={style}
        iconStyle={iconStyle}
        containerStyle={[styles.containerStyle, {...containerStyle}]}
        size={27}
      />
      <Text style={styles.textStyle}>{item}</Text>
    </SafeAreaView>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.success,
    flexDirection: 'row',
    height: '10%',
    alignItems: 'center',
  },
  containerStyle: {
    marginLeft: 15,
    marginRight: 15,
  },
  textStyle: {
    fontSize: 19,
    color: COLORS.white,
    fontWeight: '500',
    marginLeft: 15,
  },
});
