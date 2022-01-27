import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {genericStyles} from '../constants/genericStyles';

const SlideShow = ({
  Images,
  sliderBoxHeight,
  style,
  Dstyele,
  autoplay,
  circleLoop,
  ContaierStyle,
}) => {
  return (
    <View style={[genericStyles.bottom(45), {...ContaierStyle}]}>
      <SliderBox
        images={Images}
        sliderBoxHeight={sliderBoxHeight}
        dotColor="#fff"
        inactiveDotColor="#000"
        autoplay={autoplay}
        circleLoop={circleLoop}
        ImageComponentStyle={[styles.ImageComponentStyle, {...style}]}
        dotStyle={[styles.dotStyle, {...Dstyele}]}
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
