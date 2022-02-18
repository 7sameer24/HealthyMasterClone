import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants';
import { genericStyles } from '../../constants/genericStyles';
import AnyIcon from './AnyIcon';

const SearchTouchable = ({ navigation }) => {
  return (
    <View style={genericStyles.bg(COLORS.success)}>
      <TouchableOpacity
        style={styles.SearchCon}
        onPress={() => navigation.navigate('Search')}>
        <AnyIcon
          name="search-outline"
          size={23}
          color={COLORS.darkgray}
          type="ionicon"
          containerStyle={styles.SearchIcon}
        />
        <Text style={styles.SearchHead}>
          Search from wide range of products
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTouchable;

const styles = StyleSheet.create({
  SearchCon: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    width: '93%',
    flexDirection: 'row',
    height: 46,
    marginVertical: 0,
    alignSelf: 'center',
    marginTop: 0,
    bottom: 6,
  },
  SearchHead: {
    padding: 10,
    fontSize: 15,
    color: COLORS.black,
  },
  SearchIcon: {
    marginTop: 10,
    marginLeft: 15,
  },
});
