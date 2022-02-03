import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {Card} from 'react-native-elements';
import cardArr from '../../../assets/Data/DummyData';
import {COLORS} from '../../constants';
import {genericStyles} from '../../constants/genericStyles';

const Categories = ({Style}) => {
  return (
    <View style={styles.container}>
      {cardArr.map(data => (
        <Card
          key={data.id}
          containerStyle={[styles.containerStyle, {backgroundColor: data.BG}]}>
          <Image source={{uri: data.ImageSource}} style={styles.image} />
          <Text style={styles.Text}>{data.heading}</Text>
          <Text style={styles.Text}>{data.subHeading}</Text>
        </Card>
      ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    bottom: 50,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  containerStyle: {
    width: 90,
    height: 82,
    borderRadius: 7,
    borderWidth: 0,
    paddingTop: 5,
    marginHorizontal: 3,
    padding: 0,
  },
  Text: {
    fontWeight: '500',
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 12,
  },
  image: {
    alignSelf: 'center',
    width: 35,
    height: 35,
  },
});
