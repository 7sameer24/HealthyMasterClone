import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SlideShow from '../SlideShow';
import {COLORS, images} from '../../constants';
import {genericStyles} from '../../constants/genericStyles';
import {colors, Divider} from 'react-native-elements';
import Collapsible from './Collapsible';
import ItemList from './ItemList';

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
    <ScrollView>
      <View style={{paddingBottom: 40, backgroundColor: COLORS.white}}>
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
        <View style={genericStyles.ml(7)}>
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
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  ContaierStyle: {
    bottom: 0,
    marginVertical: 10,
  },
  slideContaier: {
    width: '97%',
    borderRadius: 0,
    bottom: 0,
  },
  ProductName: {
    fontSize: 15,
    color: COLORS.black,
    marginBottom: 3,
    fontWeight: '700',
  },
  ProductDescription: {
    fontSize: 14,
    color: COLORS.darkgray,
    fontWeight: '500',
  },
  quantityContanier: {
    marginLeft: 10,
    flexDirection: 'row',
    marginVertical: 10,
  },
  quantity: {
    fontWeight: 'bold',
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  quantityTouchable: selectedGM => ({
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 4,
    borderColor: selectedGM ? colors.success : COLORS.darkgray,
  }),
  sales_rate: {
    marginLeft: 3,
    color: COLORS.red,
    fontSize: 15,
    fontWeight: '700',
  },
  relatedProducts: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 5,
    marginLeft: 7,
  },
  CardContainer: {
    borderRadius: 5,
    padding: 0,
    width: 200,
    height: 300,
    marginBottom: 0,
    marginHorizontal: 8,
    borderColor: COLORS.lightGray2,
    alignSelf: 'center',
    paddingTop: 5,
    minHeight: 360,
    marginTop: 10,
  },
  styleImage: {
    width: 190,
    height: 100,
    alignSelf: 'center',
    borderRadius: 5,
  },
  TextStyle: {
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: '500',
    color: COLORS.black,
    fontSize: 14,
  },
  short_description: {
    color: COLORS.darkgray,
    textAlign: 'center',
    fontSize: 13,
  },
  container: {
    marginLeft: 0,
    alignSelf: 'center',
    bottom: 20,
  },
});
