import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import getData from '../../../API/API';
import AnyIcon from '../../AnyIcon';
import {genericStyles} from '../../../constants/genericStyles';
import {colors} from 'react-native-elements';
import ItemList from '../ItemList';
import styles from './ItemsStyles';
const Items = ({route, navigation}) => {
  const {ID, Count} = route.params;
  const [data, setData] = useState([]);
  const [Grid, setGrid] = useState(false);

  const itemList = async () => {
    const URL = `https://healthymaster.in/admins/api/items/item.json?&item_category_id=${ID}&customer_id=159&page=1`;
    const response = await getData(URL);
    const {status} = response;
    if (!status) {
      console.log(response);
      return void 0;
    } else {
      setData(response.data.items);
    }
  };
  useEffect(() => {
    itemList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={genericStyles.fontSize(17)}>{Count} Items</Text>
        <View style={styles.iconContainer}>
          <AnyIcon
            name="swap-vertical-outline"
            type="ionicon"
            size={28}
            containerStyle={genericStyles.mr(5)}
            onPress={() => setGrid(false)}
            color={Grid ? colors.black : colors.success}
          />
          <AnyIcon
            name={Grid ? 'grid' : 'grid-outline'}
            type="ionicon"
            size={28}
            color={Grid ? colors.success : colors.black}
            onPress={() => setGrid(true)}
          />
        </View>
      </View>
      {data.length > 0 ? (
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
        />
      ) : (
        <ActivityIndicator
          size="large"
          color={colors.success}
          style={styles.loader}
        />
      )}
    </View>
  );
};

export default Items;
