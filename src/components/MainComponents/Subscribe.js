import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card, Divider, Input, Button} from 'react-native-elements';
import {COLORS} from '../../constants';
import {genericStyles} from '../../constants/genericStyles';

const Subscribe = () => {
  return (
    <Card containerStyle={styles.containerStyle}>
      <Text style={styles.heading}>Subscribe to our Newsletter</Text>
      <Divider width={1} style={genericStyles.mh(130)} color="white" />
      <Text style={[styles.heading, {fontSize: 15}]}>
        Get helpful tips to help you get stay healthy
      </Text>
      <Input
        placeholder="example@example.com"
        inputContainerStyle={styles.InputContainerStyle}
        inputStyle={genericStyles.m(3)}
        placeholderTextColor={COLORS.darkgray}
        errorStyle={genericStyles.m(0)}
      />
      <Button
        title="Subscribe"
        containerStyle={styles.buttonCon}
        buttonStyle={genericStyles.bg(COLORS.black)}
      />
    </Card>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 5,
    borderWidth: 0,
    padding: 0,
    backgroundColor: COLORS.success,
    margin: 0,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  heading: {
    fontSize: 21,
    textAlign: 'center',
    marginVertical: 10,
    color: COLORS.white,
    fontWeight: '500',
  },
  InputContainerStyle: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 0,
    borderRadius: 4,
  },
  buttonCon: {
    width: 150,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
});
