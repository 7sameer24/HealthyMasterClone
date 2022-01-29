import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
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
  const allImage = [images.Slide1, images.Slide2, images.Slide3, images.Slide4];
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar navigation={navigation} />
      <ScrollView style={genericStyles.fill}>
        <View style={styles.colorView}></View>
        <SlideShow
          Images={allImage}
          sliderBoxHeight={150}
          autoplay={true}
          circleLoop={true}
        />
        <Categories />
        <Banner source={images.Banner} />
        <HealthyOffers navigation={navigation} />
        <Banner source={images.Banner2} style={genericStyles.bottom(20)} />
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
  colorView: {
    backgroundColor: colors.success,
    height: 50,
  },
});
