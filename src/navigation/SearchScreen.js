import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors, Divider} from 'react-native-elements';
import {COLORS} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = ({Data, value, navigation, NAN}) => {
  // const [ProductName, setName] = useState([]);
  // console.log(ProductName);
  // const storeData = async value => {
  //   try {
  //     await AsyncStorage.setItem('Product', value);
  //     alert('data Saved');
  //   } catch (e) {
  //     alert('Not Saved');
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('Product');
  //     if (value !== null) {
  //       setName(value);
  //     }
  //   } catch (e) {
  //     alert('Not Show');
  //   }
  // };

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Result', {
            Name: item.name,
            ID: item.item_id,
            CategoryID: item.category_id,
          }),
            NAN('');
          //   storeData(item.name);
          // getData();
        }}>
        <Text style={styles.ItemView}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorComponent = () => {
    return <Divider color={COLORS.darkgray} width={0.3} />;
  };

  return (
    <SafeAreaView>
      <Text style={styles.Rapeing}>
        {value.length > 0 ? 'Search Suggestions' : 'Search History'}
      </Text>
      {/* {value.length > 0 ? null : <Text>{ProductName}</Text>} */}
      <FlatList
        data={value.length > 0 ? Data : null}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={ItemView}
      />
    </SafeAreaView>
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
    borderColor: colors.success,
    borderWidth: 1,
  },
  errorStyle: {
    margin: 0,
    left: 5,
  },
  Rapeing: {
    backgroundColor: COLORS.darkgray,
    paddingVertical: 2,
    color: colors.white,
  },
});
