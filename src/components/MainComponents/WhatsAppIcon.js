import React from 'react';
import {StyleSheet} from 'react-native';
import AnyIcon from './AnyIcon';
import {colors} from 'react-native-elements';

const WhatsAppIcon = () => {
  return (
    <AnyIcon
      name="logo-whatsapp"
      type="ionicon"
      color={colors.success}
      size={30}
      containerStyle={styles.containerStyle}
      reverse={true}
      onPress={() => alert('Not available')}
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
