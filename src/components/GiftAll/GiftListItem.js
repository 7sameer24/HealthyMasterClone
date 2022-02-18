import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import getData from '../../constants/API/API';
import ItemList from '../ItemScreen/Items/ItemList';
import styles from '../ItemScreen/Items/ItemsStyles';
import { genericStyles } from '../../constants/genericStyles';
import AnyIcon from '../MainComponents/AnyIcon';
import { COLORS } from '../../constants';
import HeaderBar from '../MainComponents/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from '../../store/action/action';
import Spinner from '../MainComponents/Spinner';

const GiftListItem = ({ route, navigation }) => {
  const { ID } = route.params;
  const [data, setData] = useState([]);
  const [Count, setCount] = useState([]);
  const [Grid, setGrid] = useState(false);

  const FetchItem = async () => {
    const URL = `http://3.6.175.107/admins/api/items/itemkeyword.json?&item_category_id=${ID}&customer_id=159&page=1`;
    const response = await getData(URL);
    const { status } = response;
    if (!status) {
      console.log(response);
      return void 0;
    } else {
      setData(response.data.ItemRows.map(_ => _.item));
      setCount(response.data.item_count);
    }
  };
  useEffect(() => {
    FetchItem();
    return () => {
      setData([]);
      setCount([]);
    };
  }, []);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <HeaderBar
        IconName="arrow-back-outline"
        IconSize={30}
        onPress={() => navigation.goBack()}
        HeartIcon="heart-outline"
        navigation={navigation}
        BadgeContainer={genericStyles.bottom(25)}
        Container={genericStyles.height('10%')}
        IconStyle={genericStyles.right('80%')}
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

export default GiftListItem;
