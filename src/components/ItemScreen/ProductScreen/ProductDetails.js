import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import SlideShow from '../../SlideShow';
import {COLORS, images} from '../../../constants';
import {genericStyles} from '../../../constants/genericStyles';
import {Button, Divider} from 'react-native-elements';
import Collapsible from '../Collapsible';
import ItemList from '../ItemList';
import styles from './ProductStyles';

const ProductDetails = ({route, navigation}) => {
  const {Data, Data2} = route.params;
  const [selectedGM, setSelectedGM] = useState(
    Data.item_variations[0].quantity_variation,
  );
  const allSalesRate = Data.item_variations.map(_ => _.sales_rate);

  const [Price, updatePrice] = useState(
    allSalesRate.lenght > 0
      ? allSalesRate[0]
      : Data.item_variations[0].sales_rate,
  );
  const allQun = Data.item_variations.map(_ => _.quantity_variation);

  const chnageHandler = value => {
    let idx = allQun.indexOf(value);
    updatePrice(allSalesRate[idx]);
  };

  const allImage = [images.Slide1, images.Slide2, images.Slide3, images.Slide4];

  return (
    <View style={styles.ViewContainer}>
      <ScrollView scrollEnabled contentContainerStyle={genericStyles.pb(62)}>
        <View style={genericStyles.bg(COLORS.white)}>
          <SlideShow
            Images={allImage}
            sliderBoxHeight={200}
            autoplay={false}
            circleLoop={true}
            style={styles.slideContaier}
            ContaierStyle={styles.ContaierStyle}
          />
          <View style={genericStyles.mh(15)}>
            <Text style={styles.ProductName}>{Data.name}</Text>
            <Text style={styles.ProductDescription}>
              {Data.short_description}
            </Text>
            <Text style={styles.sales_rate}>₹{Price}</Text>
          </View>
          <View style={styles.quantityContanier}>
            {Data.item_variations.map(data => {
              return (
                <TouchableOpacity
                  key={data.id}
                  style={styles.quantityTouchable(
                    selectedGM === data.quantity_variation,
                  )}
                  onPress={() => {
                    setSelectedGM(data.quantity_variation),
                      chnageHandler(data.quantity_variation);
                  }}>
                  <Text style={styles.quantity}>{data.quantity_variation}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Divider width={6} color={COLORS.lightGray2} />
          <View>
            <Collapsible Data={Data} />
          </View>
          <Divider
            width={6}
            color={COLORS.lightGray2}
            style={genericStyles.mt(10)}
          />
          <View style={styles.RelatedProductsCon}>
            <Text style={styles.relatedProducts}>Related Products</Text>
            <ItemList
              data={Data2}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              containerStyle={styles.CardContainer}
              styleImage={styles.styleImage}
              TextStyle={styles.TextStyle}
              shortDescriptionStyle={styles.short_description}
              container={styles.container}
              Fotter={genericStyles.FD('column')}
              AddCartContainer={genericStyles.left(0)}
              PickerContainer={genericStyles.mt(5)}
              navigation={navigation}
              contentContainerStyle={genericStyles.mh(0)}
              numberOfLines={3}
            />
          </View>
        </View>
      </ScrollView>
      <View>
        <Button
          title="Add to Cart"
          icon={{
            name: 'cart-outline',
            type: 'ionicon',
            size: 25,
            color: 'white',
          }}
          iconContainerStyle={genericStyles.mr(10)}
          titleStyle={styles.titleStyle}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.ButtonCon}
        />
      </View>
    </View>
  );
};

export default ProductDetails;
