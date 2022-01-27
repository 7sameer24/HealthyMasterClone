import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import getData from '../../API/API';
import AnyIcon from '../AnyIcon';
import {genericStyles} from '../../constants/genericStyles';
import {colors} from 'react-native-elements';
import ItemList from './ItemList';
import {COLORS} from '../../constants';

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
          />
          <AnyIcon
            name="grid-outline"
            type="ionicon"
            size={28}
            onPress={() => setGrid(true)}
          />
        </View>
      </View>
      {data.length > 0 ? (
        <ItemList
          data={data}
          navigation={navigation}
          contentContainerStyle={
            Grid ? genericStyles.ml(5) : genericStyles.mh(10)
          }
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
          AddCartContainer={Grid ? genericStyles.left(0) : genericStyles.mt(0)}
          PickerContainer={
            Grid ? genericStyles.left(0) : genericStyles.left(-10)
          }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
  },
  containerStyle: Grid => ({
    borderRadius: 5,
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 0,
    width: Grid ? 200 : '100%',
    marginHorizontal: 5,
    marginBottom: 3,
    marginTop: 10,
    alignSelf: Grid ? 'center' : null,
    minHeight: Grid ? 360 : null,
  }),
  image: Grid => ({
    width: Grid ? 190 : 95,
    height: Grid ? 100 : 90,
    borderRadius: 5,
    marginRight: Grid ? null : 10,
    alignSelf: Grid ? 'center' : null,
  }),
  Text: Grid => ({
    fontWeight: '500',
    color: COLORS.black,
    fontSize: 14,
    alignSelf: Grid ? 'center' : null,
    marginTop: Grid ? 5 : null,
  }),
  itemListContainer: {
    flex: 1,
    maxHeight: '90%',
  },
  short_description: Grid => ({
    color: COLORS.darkgray,
    textAlign: Grid ? 'center' : 'left',
    marginRight: Grid ? null : 100,
    fontSize: 13,
  }),
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Fotter: Grid => ({
    flexDirection: Grid ? 'column' : 'row',
    alignSelf: Grid ? 'center' : null,
  }),
});
