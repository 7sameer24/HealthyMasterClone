import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {images} from '../constants';
import {genericStyles} from '../constants/genericStyles';

const SlideShow = () => {
  const allImage = [images.Slide1, images.Slide2, images.Slide3, images.Slide4];

  return (
    <View style={genericStyles.bottom(45)}>
      <SliderBox
        images={allImage}
        sliderBoxHeight={150}
        dotColor="#fff"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
        ImageComponentStyle={styles.ImageComponentStyle}
        dotStyle={styles.dotStyle}
      />
    </View>
  );
};

export default SlideShow;

const styles = StyleSheet.create({
  ImageComponentStyle: {
    borderRadius: 7,
    width: '98%',
    alignSelf: 'center',
  },
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 15,
    marginHorizontal: -15,
    padding: 0,
    margin: 0,
  },
});
