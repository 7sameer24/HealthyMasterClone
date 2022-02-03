import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors, Divider} from 'react-native-elements';
import {COLORS} from '../constants';

const SearchScreen = ({Data, value, navigation, NAN}) => {
  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Result', {Name: item.name, ID: item.item_id}),
            NAN('');
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
});
