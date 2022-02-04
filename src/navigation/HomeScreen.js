import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from 'react-native-elements';
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

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [TestData, setTestData] = useState([]);
  const [cart, setCart] = useState([]);
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
        response.data.dynamic[5].DynamicList_cat[0].child_item_categories,
      );
      setTestData(response.data.clients);
      setCart(response.data.cart_count);
      setImage(response.data.dynamic[0].DynamicList);
    }
  };

  const FetchImages = allImage.map(_ => _.image_fullpath);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {(data && TestData && allImage).length > 0 ? (
        <>
          <HeaderBar navigation={navigation} Data={cart} />
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
      ) : (
        <ActivityIndicator
          size="large"
          color={colors.success}
          style={styles.loader}
        />
      )}
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
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
