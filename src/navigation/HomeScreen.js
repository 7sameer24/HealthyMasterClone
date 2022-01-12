import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AnyIcon from '../components/AnyIcon';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import HealthyOffers from '../components/HealthyOffers';
import SlideShow from '../components/SlideShow';
import {COLORS} from '../constants';
import {genericStyles} from '../constants/genericStyles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
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
            />
            <AnyIcon
              name="heart-outline"
              type="ionicon"
              size={30}
              color={COLORS.white}
              containerStyle={genericStyles.mr(10)}
            />
            <AnyIcon
              name="bell-outline"
              type="material-community"
              size={30}
              color={COLORS.white}
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
      <ScrollView style={genericStyles.fill} nestedScrollEnabled={true}>
        <View style={styles.colorView}></View>
        <SlideShow />
        <Categories />
        <Banner />
        <HealthyOffers />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  View: {
    flex: 0.1,
    backgroundColor: COLORS.lawngreen,
    paddingBottom: 45,
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    borderRadius: 7,
    width: '95%',
    flexDirection: 'row',
    height: 46,
    marginTop: 10,
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
  colorView: {
    backgroundColor: COLORS.lawngreen,
    height: 50,
  },
});
