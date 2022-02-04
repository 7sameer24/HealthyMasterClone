import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, colors} from 'react-native-elements';
import getData from '../../constants/API/API';
import {COLORS} from '../../constants';
import {genericStyles} from '../../constants/genericStyles';
import ItemCuantity from '../ItemScreen/Items/ItemCuantity';

const SearchResult = ({route, navigation}) => {
  const {ID, CategoryID} = route.params;
  const [Data, setData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const FetchProduct = async () => {
    const URL = 'http://3.6.175.107/admins/api/items/search_result.json?';
    const URL2 = `http://3.6.175.107//admins/api/items/item.json?&item_category_id=${CategoryID}&customer_id=159&page=1`;
    const response = await getData(URL);
    const SecondUrlRes = await getData(URL2);
    const {status} = response;
    if (!status) {
      console.log(response);
      return void 0;
    } else {
      setData(
        response.data.searchResult.filter(item => {
          return item.id === ID;
        }),
      );
      setMasterData(SecondUrlRes.data.items);
    }
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <View style={genericStyles.fill}>
      {Data.length > 0 ? (
        <>
          <Text style={styles.Rapeing}>Search Result</Text>
          {Data.map(data => {
            return (
              <View key={data.id} style={genericStyles.mh(10)}>
                <Card containerStyle={styles.containerStyle}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() =>
                      navigation.push('Product Details', {
                        Data: data,
                        Data2: masterData,
                        ID: data.item_variations[0].item_id,
                      })
                    }>
                    <View style={genericStyles.row}>
                      <Image
                        source={{uri: data.image_fullpath}}
                        style={styles.styleImage}
                      />
                      <View>
                        <Text style={styles.TextStyle}>{data.name}</Text>
                        <Text
                          numberOfLines={4}
                          style={styles.shortDescriptionStyle}
                          textBreakStrategy="balanced">
                          {data.short_description}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <ItemCuantity
                    data={data.item_variations}
                    Name={data.name}
                    AddCartContainer={styles.AddCartContainer}
                    Fotter={styles.Fotter}
                    PickerContainer={genericStyles.selfCenter}
                  />
                </Card>
              </View>
            );
          })}
        </>
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

export default SearchResult;

const styles = StyleSheet.create({
  Rapeing: {
    backgroundColor: COLORS.darkgray,
    paddingVertical: 2,
    color: colors.white,
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  containerStyle: {
    borderRadius: 5,
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 0,
    width: '100%',
    marginHorizontal: 0,
    marginBottom: 3,
    marginTop: 10,
  },
  styleImage: {
    width: 95,
    height: 90,
    borderRadius: 5,
    marginRight: 10,
  },
  TextStyle: {
    fontWeight: '500',
    color: COLORS.black,
    fontSize: 13,
  },
  shortDescriptionStyle: {
    color: COLORS.darkgray,
    textAlign: 'left',
    marginRight: 130,
    fontSize: 13,
  },
  AddCartContainer: {
    left: 40,
    bottom: 10,
  },
  Fotter: {
    flexDirection: 'row',
    marginLeft: 70,
  },
});
