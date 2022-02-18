import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SlideShow from '../../MainComponents/SlideShow';
import { COLORS } from '../../../constants';
import { genericStyles } from '../../../constants/genericStyles';
import { Button, Divider } from 'react-native-elements';
import Collapsible from '../Items/Collapsible';
import ItemList from '../Items/ItemList';
import styles from './ProductStyles';
import getData from '../../../constants/API/API';
import { ADD_TO_CART, INCREMENT } from '../../../store/action/action';
import HeaderBar from '../../MainComponents/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../MainComponents/Spinner';

const ProductDetails = ({ route, navigation }) => {
  const { Data, Data2, ID } = route.params;
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

  const [FetchImg, setFetchImg] = useState([]);
  const allImage = FetchImg.map(_ => _.image_fullpath);

  const fatchImages = async () => {
    const URL = `http://3.6.175.107/admins/api/items/itemdescription.json?&jain_thela_admin_id=1&item_id=${ID}&customer_id=159`;
    const response = await getData(URL);
    const status = response;
    if (!status) {
      console.log(response);
      return void 0;
    } else {
      setFetchImg(response.data.item_description.item_images);
    }
  };

  useEffect(() => {
    fatchImages();

    return () => {
      setFetchImg([]);
    };
  }, []);

  const dispatch = useDispatch();
  return (
    <View style={styles.ViewContainer}>
      <HeaderBar
        headerName="Product Details"
        IconName="arrow-back-outline"
        IconSize={30}
        onPress={() => navigation.goBack()}
        HeartIcon="heart-outline"
        navigation={navigation}
        BadgeContainer={genericStyles.bottom(25)}
        Container={genericStyles.height('11%')}
        Heading={genericStyles.right(40)}
      />
      {allImage.length > 0 ? (
        <>
          <ScrollView
            scrollEnabled
            contentContainerStyle={genericStyles.pb(62)}>
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
                      delayPressIn={null}
                      key={data.id}
                      style={styles.quantityTouchable(
                        selectedGM === data.quantity_variation,
                      )}
                      onPress={() => {
                        setSelectedGM(data.quantity_variation),
                          chnageHandler(data.quantity_variation);
                      }}>
                      <Text style={styles.quantity}>
                        {data.quantity_variation}
                      </Text>
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
              onPress={() =>
                dispatch({
                  type: INCREMENT,
                })
              }
            />
          </View>
        </>
      ) : (
        <Spinner />
      )}
    </View>
  );
};

export default ProductDetails;
