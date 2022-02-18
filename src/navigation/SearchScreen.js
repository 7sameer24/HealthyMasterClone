import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { COLORS } from '../constants';
import apiUrl from '../constants/API/apiUrl';
import HeaderInput from '../components/Search/HeaderInput';
import getData from '../constants/API/API';

const SearchScreen = ({ navigation }) => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchName();
    return () => {
      setFilterData([]);
      setMasterData([]);
    };
  }, []);

  const fetchName = async () => {
    const URL = apiUrl.SearchItem;
    const response = await getData(URL);
    const { status } = response;
    if (!status) {
      console.log(response);
      return void 0;
    } else {
      setFilterData(response.data.search_items);
      setMasterData(response.data.search_items);
    }
  };
  const setFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.name ? item.name.toLowerCase() : ''.toUpperCase();
        const textData = text.toLowerCase();
        return itemData.search(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Result', {
            Name: item.name,
            ID: item.item_id,
            CategoryID: item.category_id,
          }),
            setSearch('');
        }}>
        <Text style={styles.ItemView}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorComponent = () => {
    return <Divider color={COLORS.darkgray} width={0.3} />;
  };

  return (
    <View>
      <HeaderInput
        value={search}
        onChangeText={text => setFilter(text)}
        onPress={() => {
          navigation.goBack(), setSearch('');
        }}
      />
      <Text style={styles.Rapeing}>
        {search.length > 0 ? 'Search Suggestions' : 'Search History'}
      </Text>
      <FlatList
        data={search.length > 0 ? filterData : null}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={ItemView}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  ItemView: {
    padding: 12,
  },
  InputContainerStyle: {
    width: '100%',
    top: 5,
    borderColor: COLORS.success,
    borderWidth: 1,
  },
  errorStyle: {
    margin: 0,
    left: 5,
  },
  Rapeing: {
    backgroundColor: COLORS.darkgray,
    paddingVertical: 2,
    color: COLORS.white,
  },
});
