import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Badge, colors} from 'react-native-elements';
import AnyIcon from './AnyIcon';
import {COLORS} from '../../constants';
import {genericStyles} from '../../constants/genericStyles';

const HeaderBar = ({navigation, Data}) => {
  return (
    <View style={styles.View}>
      <View style={styles.View2}>
        <AnyIcon
          name="menu-outline"
          type="ionicon"
          size={30}
          color={COLORS.white}
          containerStyle={styles.IconStyle}
          onPress={() => navigation.toggleDrawer()}
        />
        <Text style={styles.Heading}>Healthy Master</Text>
        <View style={styles.IconContainer}>
          <AnyIcon
            name="cart-outline"
            type="ionicon"
            size={30}
            color={COLORS.white}
            containerStyle={genericStyles.mr(10)}
            onPress={() => alert('Not available')}
          />
          <Badge
            status="error"
            value={Data}
            containerStyle={styles.BadgeContainer}
          />
          <AnyIcon
            name="heart-outline"
            type="ionicon"
            size={30}
            color={COLORS.white}
            containerStyle={genericStyles.mr(10)}
            onPress={() => alert('Not available')}
          />
          <AnyIcon
            name="bell-outline"
            type="material-community"
            size={30}
            color={COLORS.white}
            onPress={() => alert('Not available')}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.SearchCon}
        onPress={() => navigation.navigate('Search')}>
        <AnyIcon
          name="search-outline"
          size={23}
          color={COLORS.darkgray}
          type="ionicon"
          containerStyle={styles.SearchIcon}
        />
        <Text style={styles.SearchHead}>
          Search from wide range of products
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  View: {
    flex: 0.1,
    backgroundColor: colors.success,
    paddingBottom: 60,
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  Heading: {
    color: COLORS.white,
    fontSize: 18,
    marginTop: 20,
    right: 50,
  },
  IconContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  IconStyle: {
    right: 12,
    marginTop: 15,
  },
  SearchCon: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    width: '93%',
    flexDirection: 'row',
    height: 46,
    marginTop: 8,
    alignSelf: 'center',
  },
  SearchHead: {
    padding: 10,
    fontSize: 15,
    color: COLORS.black,
  },
  SearchIcon: {
    marginTop: 10,
    marginLeft: 15,
  },
  BadgeContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});
