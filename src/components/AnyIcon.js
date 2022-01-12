import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

const AnyIcon = ({
  onPress,
  size,
  name,
  type,
  color,
  style,
  reverse,
  iconStyle,
  containerStyle,
}) => {
  return (
    <View>
      <Icon
        name={name}
        type={type}
        color={color}
        reverse={reverse}
        containerStyle={containerStyle}
        onPress={onPress}
        size={size}
        iconStyle={iconStyle}
        style={style}
      />
    </View>
  );
};

export default AnyIcon;

const styles = StyleSheet.create({
  IconContainer: {
    position: 'absolute',
    bottom: -10,
    marginBottom: 20,
    alignSelf: 'flex-end',
    right: 25,
  },
  Icon: {
    elevation: 10,
  },
});
