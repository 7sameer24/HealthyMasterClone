import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ItemCuantity from './ItemCuantity';
import {Card} from 'react-native-elements';

const ItemList = ({
  data,
  navigation,
  itemListContainer,
  scrollEnabled,
  horizontal,
  contentContainerStyle,
  containerStyle,
  styleImage,
  TextStyle,
  shortDescriptionStyle,
  viewStyle,
  showsVerticalScrollIndicator,
  showsHorizontalScrollIndicator,
  PickerContainer,
  DropDownFont,
  Fotter,
  Rate,
  AddCartContainer,
  CartFont,
  container,
  numColumns,
  initialNumToRender,
  numberOfLines,
  columnWrapperStyle,
}) => {
  return (
    <View style={itemListContainer}>
      <FlatList
        numColumns={numColumns}
        data={data}
        keyExtractor={item => item.id}
        initialNumToRender={initialNumToRender}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        scrollEnabled={scrollEnabled}
        horizontal={horizontal}
        contentContainerStyle={contentContainerStyle}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        columnWrapperStyle={columnWrapperStyle}
        renderItem={({item}) => {
          // console.log(item.item_variations);
          return (
            <Card containerStyle={containerStyle}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  navigation.push('Product Details', {
                    Data: item,
                    Data2: data,
                    ID: item.item_variations[0].item_id,
                  })
                }>
                <View style={viewStyle}>
                  <Image
                    source={{uri: item.image_fullpath}}
                    style={styleImage}
                  />
                  <View>
                    <Text style={TextStyle}>{item.name}</Text>
                    <Text
                      numberOfLines={numberOfLines}
                      style={shortDescriptionStyle}
                      textBreakStrategy="balanced">
                      {item.short_description}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <ItemCuantity
                data={item.item_variations}
                Name={item.name}
                AddCartContainer={AddCartContainer}
                CartFont={CartFont}
                container={container}
                DropDownFont={DropDownFont}
                Fotter={Fotter}
                PickerContainer={PickerContainer}
                Rate={Rate}
              />
            </Card>
          );
        }}
      />
    </View>
  );
};

export default ItemList;
