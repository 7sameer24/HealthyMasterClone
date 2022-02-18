import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import AnyIcon from './AnyIcon';
import { COLORS } from '../../constants';
import { genericStyles } from '../../constants/genericStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const HeaderBar = ({
  navigation,
  headerName,
  IconName,
  onPress,
  IconSize,
  BellIcon,
  HeartIcon,
  BadgeContainer,
  Container,
  Heading,
  IconStyle,
}) => {
  // const ItemCount = useSelector(state => state);
  // console.log('yayy', Object.keys(ItemCount));
  return (
    <SafeAreaView style={[styles.Container, { ...Container }]}>
      <View style={styles.View2}>
        <AnyIcon
          name={IconName}
          type="ionicon"
          size={IconSize}
          color={COLORS.white}
          containerStyle={[styles.IconStyle, { ...IconStyle }]}
          onPress={onPress}
        />
        <Text style={[styles.Heading, { ...Heading }]}>{headerName}</Text>
        <View style={styles.IconContainer}>
          <AnyIcon
            name="cart-outline"
            type="ionicon"
            size={IconSize}
            color={COLORS.white}
            containerStyle={genericStyles.mr(10)}
            onPress={() => navigation.navigate('My Cart')}
          />
          <Badge
            status="error"
            // value={ItemCount.addCart}
            containerStyle={[styles.BadgeContainer, { ...BadgeContainer }]}
          />
          <AnyIcon
            name={HeartIcon}
            type="ionicon"
            size={IconSize}
            color={COLORS.white}
            containerStyle={genericStyles.mr(10)}
            onPress={() => alert('Not available')}
          />
          <AnyIcon
            name={BellIcon}
            type="material-community"
            size={30}
            color={COLORS.white}
            onPress={() => alert('Not available')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  Container: {
    height: '10%',
    backgroundColor: COLORS.success,
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  Heading: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
    right: 30,
    alignItems: 'center',
  },
  IconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left: '3%',
  },
  IconStyle: {
    right: 12,
  },
  BadgeContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});
