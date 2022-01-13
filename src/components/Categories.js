import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {Card} from 'react-native-elements';
import cardArr from '../../assets/Data/DummyData';
import {COLORS} from '../constants';
import {genericStyles} from '../constants/genericStyles';

const Categories = ({Style}) => {
  return (
    <View>
      <FlatList
        data={cardArr}
        keyExtractor={item => item.id}
        horizontal
        // scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        style={genericStyles.bottom(50)}
        renderItem={({item}) => (
          <Card
            containerStyle={[styles.containerStyle, {backgroundColor: item.BG}]}
            wrapperStyle={genericStyles.ai('center')}>
            <Image source={{uri: item.ImageSource}} style={styles.image} />
            <Text style={styles.Text}>{item.heading}</Text>
            <Text style={styles.Text}>{item.subHeading}</Text>
          </Card>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  containerStyle: {
    width: 98,
    height: 82,
    borderRadius: 7,
    borderWidth: 0,
    paddingTop: 5,
    marginHorizontal: 5,
    padding: 0,
  },
  Text: {
    fontWeight: '500',
    color: COLORS.black,
  },
  image: {
    alignSelf: 'center',
    width: 35,
    height: 35,
  },
});
