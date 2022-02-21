import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import getData from '../constants/API/API';
import apiUrl from '../constants/API/apiUrl';
import Banner from '../components/MainComponents/Banner';
import Categories from '../components/MainComponents/Categories';
import HeaderBar from '../components/MainComponents/HeaderBar';
import HealthyOffers from '../components/MainComponents/HealthyOffers';
import SlideShow from '../components/MainComponents/SlideShow';
import Subscribe from '../components/MainComponents/Subscribe';
import Testimonials from '../components/MainComponents/Testimonials';
import WhatsAppIcon from '../components/MainComponents/WhatsAppIcon';
import {COLORS, images} from '../constants';
import {genericStyles} from '../constants/genericStyles';
import SearchTouchable from '../components/MainComponents/SearchTouchable';
import Spinner from '../components/MainComponents/Spinner';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [TestData, setTestData] = useState([]);
  const [allImage, setImage] = useState([]);
  const fetchData = async () => {
    const URL = apiUrl.Home;
    const response = await getData(URL);
    const {status} = response;
    if (!status) {
      console.log(response);
      return void 0;
    } else {
      setData(
        response.data.dynamic[4].DynamicList_cat[0].child_item_categories,
      );
      setTestData(response.data.clients);
      setImage(response.data.dynamic[0].DynamicList);
    }
  };

  const FetchImages = allImage.map(_ => _.image_fullpath);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* {(data && TestData && allImage).length > 0 ? ( */}
      <>
        <HeaderBar
          navigation={navigation}
          headerName="Healthy Master"
          onPress={() => navigation.openDrawer()}
          IconSize={28}
          IconName="menu-outline"
          HeartIcon="heart-outline"
          BellIcon="bell-outline"
        />
        <SearchTouchable navigation={navigation} />
        <ScrollView style={genericStyles.fill}>
          <View style={styles.colorView}></View>
          <SlideShow
            Images={FetchImages}
            sliderBoxHeight={150}
            autoplay={true}
            circleLoop={true}
          />
          <Categories />
          <Banner source={images.Banner} />
          <HealthyOffers navigation={navigation} Data={data} />
          <Banner source={images.Banner2} style={genericStyles.bottom(20)} />
          <Testimonials Data={TestData} />
          <Subscribe />
        </ScrollView>
        <WhatsAppIcon />
      </>
      {/* ) : (
        <Spinner barStyle="dark-content" />
      )} */}
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
    backgroundColor: COLORS.success,
    height: 50,
  },
});
