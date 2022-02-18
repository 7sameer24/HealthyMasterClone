import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import getData from '../../../constants/API/API';
import AnyIcon from '../../MainComponents/AnyIcon';
import { genericStyles } from '../../../constants/genericStyles';
import ItemList from './ItemList';
import styles from './ItemsStyles';
import { COLORS } from '../../../constants';
import HeaderBar from '../../MainComponents/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, INCREMENT } from '../../../store/action/action';
import Spinner from '../../MainComponents/Spinner';
const Items = ({ route, navigation }) => {
  const { ID, Count, Name } = route.params;
  const [data, setData] = useState([]);
  const [Grid, setGrid] = useState(false);

  const itemList = async () => {
    const URL = `http://3.6.175.107//admins/api/items/item.json?&item_category_id=${ID}&customer_id=159&page=1`;
    const response = await getData(URL);
    const { status } = response;
    if (!status) {
      console.log(response);
      return void 0;
    } else {
      setData(response.data.items);
    }
  };
  useEffect(() => {
    itemList();
    return () => {
      setData([]);
    };
  }, []);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <HeaderBar
        headerName={Name}
        IconName="arrow-back-outline"
        IconSize={30}
        onPress={() => navigation.goBack()}
        HeartIcon="heart-outline"
        navigation={navigation}
        BadgeContainer={genericStyles.bottom(25)}
        Container={genericStyles.height('11%')}
        Heading={genericStyles.right(50)}
      />
      {data.length > 0 ? (
        <>
          <View style={styles.header}>
            <Text style={genericStyles.fontSize(17)}>{Count} Items</Text>
            <View style={styles.iconContainer}>
              <AnyIcon
                name="swap-vertical-outline"
                type="ionicon"
                size={28}
                containerStyle={genericStyles.mr(5)}
                onPress={() => setGrid(false)}
                color={Grid ? COLORS.black : COLORS.success}
              />
              <AnyIcon
                name={Grid ? 'grid' : 'grid-outline'}
                type="ionicon"
                size={28}
                color={Grid ? COLORS.success : COLORS.black}
                onPress={() => setGrid(true)}
              />
            </View>
          </View>
          <ItemList
            data={data}
            navigation={navigation}
            contentContainerStyle={styles.contentContainerStyle(Grid)}
            viewStyle={Grid ? null : genericStyles.row}
            TextStyle={styles.Text(Grid)}
            containerStyle={styles.containerStyle(Grid)}
            horizontal={false}
            itemListContainer={styles.itemListContainer}
            scrollEnabled={true}
            shortDescriptionStyle={styles.short_description(Grid)}
            styleImage={styles.image(Grid)}
            showsVerticalScrollIndicator={false}
            numColumns={Grid ? 2 : 2}
            initialNumToRender={4}
            Fotter={styles.Fotter(Grid)}
            AddCartContainer={styles.AddCartContainer(Grid)}
            PickerContainer={
              Grid ? genericStyles.left(0) : genericStyles.selfCenter
            }
            numberOfLines={Grid ? 3 : null}
            columnWrapperStyle={Grid ? null : genericStyles.FD('column')}
            onPressAddCart={() => dispatch({ type: INCREMENT })}
          />
        </>
      ) : (
        <Spinner />
      )}
    </View>
  );
};
export default Items;
