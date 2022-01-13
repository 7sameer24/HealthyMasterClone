import React, {useEffect} from 'react';
import {LogBox, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {colors} from 'react-native-elements';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import HeaderBar from '../components/HeaderBar';
import HealthyOffers from '../components/HealthyOffers';
import SlideShow from '../components/SlideShow';
import Suscribe from '../components/Suscribe';
import Testimonials from '../components/Testimonials';
import {COLORS, images} from '../constants';
import {genericStyles} from '../constants/genericStyles';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        onPress={() => navigation.toggleDrawer()}
        onPress2={() => navigation.navigate('Search')}
      />
      <ScrollView style={genericStyles.fill} nestedScrollEnabled={true}>
        <View style={styles.colorView}></View>
        <SlideShow />
        <Categories />
        <Banner
          source={{
            uri: images.Banner,
          }}
        />
        <HealthyOffers />
        <Banner
          source={{
            uri: images.Banner2,
          }}
        />
        <Testimonials />
        <Suscribe />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  View: {
    flex: 0.1,
    backgroundColor: colors.success,
    paddingBottom: 50,
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
    borderRadius: 7,
    width: '95%',
    flexDirection: 'row',
    height: 46,
    marginTop: 5,
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
    backgroundColor: colors.success,
    height: 50,
  },
});
