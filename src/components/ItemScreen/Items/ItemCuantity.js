import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {COLORS} from '../../../constants';
import {colors} from 'react-native-elements';

const ItemCuantity = ({
  data,
  Name,
  container,
  PickerContainer,
  DropDownFont,
  Fotter,
  Rate,
  AddCartContainer,
  CartFont,
}) => {
  const [selectedGM, setSelectedGM] = useState(data[0].quantity_variation);
  const allSalesRate = data.map(_ => _.sales_rate);

  const [Price, updatePrice] = useState(
    allSalesRate.lenght > 0 ? allSalesRate[0] : data[0].sales_rate,
  );
  const allQun = data.map(_ => _.quantity_variation);

  const chnageHandler = value => {
    let idx = allQun.indexOf(value);
    updatePrice(allSalesRate[idx]);
  };

  return (
    <View style={[styles.container, {...container}]}>
      <Picker
        selectedValue={selectedGM}
        onValueChange={value => {
          setSelectedGM(value);
          chnageHandler(value);
        }}
        prompt={Name}
        mode="dropdown"
        style={[styles.PickerContainer, {...PickerContainer}]}>
        {data.map(data => (
          <Picker.Item
            style={[styles.DropDownFont, {...DropDownFont}]}
            label={data.quantity_variation}
            value={data.quantity_variation}
            key={data.id}
          />
        ))}
      </Picker>
      <View style={[styles.Fotter, {...Fotter}]}>
        <Text style={[styles.Rate, {...Rate}]}>Price {Price}₹</Text>
        <TouchableOpacity
          style={[styles.AddCartContainer, {...AddCartContainer}]}
          onPress={() => alert('Not available')}>
          <Text style={[styles.CartFont, {...CartFont}]}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCuantity;

const styles = StyleSheet.create({
  container: {
    bottom: 10,
    alignSelf: 'center',
  },
  Rate: {
    color: COLORS.red,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  PickerContainer: {
    width: 140,
  },
  DropDownFont: {
    fontSize: 13,
  },
  AddCartContainer: {
    backgroundColor: colors.success,
    width: 120,
    padding: 6,
    borderRadius: 4,
    marginTop: 5,
  },
  CartFont: {
    color: colors.white,
    alignSelf: 'center',
  },
  Fotter: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
