import React from 'react';
import {StyleSheet, ToastAndroid} from 'react-native';
import {COLORS} from '../../constants';
import AnyIcon from './AnyIcon';

const WhatsAppIcon = () => {
  return (
    <AnyIcon
      name="logo-whatsapp"
      type="ionicon"
      color={COLORS.success}
      size={30}
      containerStyle={styles.containerStyle}
      reverse={true}
      onPress={() => ToastAndroid.show('Not available', ToastAndroid.SHORT)}
    />
  );
};

export default WhatsAppIcon;

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
