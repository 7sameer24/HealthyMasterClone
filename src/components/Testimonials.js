import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import TestimonialData from '../../assets/Data/TestimonialData';
import {COLORS} from '../constants';
import {genericStyles} from '../constants/genericStyles';
import AnyIcon from './AnyIcon';

const Testimonials = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Our Clients say</Text>
      <Divider width={1} style={styles.Divider} color={COLORS.lawngreen} />
      <View>
        <FlatList
          data={TestimonialData}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => (
            <Card
              containerStyle={[
                styles.containerStyle,
                {backgroundColor: item.BG},
              ]}
              wrapperStyle={genericStyles.ai('center')}>
              <AnyIcon
                name="format-quote-open"
                type="material-community"
                color={COLORS.opacity}
                size={50}
              />
              <Text style={styles.Text}>{item.content}</Text>
              <Image source={item.image} style={styles.image} />
              <Text style={[styles.Text, {marginTop: 3}]}>{item.name}</Text>
            </Card>
          )}
        />
      </View>
    </View>
  );
};

export default Testimonials;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    bottom: 30,
    paddingVertical: 10,
  },
  Heading: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
    color: COLORS.black,
    fontWeight: '500',
  },
  containerStyle: {
    borderRadius: 4,
    borderWidth: 0,
    padding: 0,
    width: 265,
    height: 320,
    marginBottom: 0,
    marginHorizontal: 8,
  },
  Divider: {
    marginHorizontal: 190,
  },
  Text: {
    fontWeight: '500',
    color: COLORS.white,
    margin: 10,
    fontSize: 16,
    marginBottom: 0,
  },
  image: {
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    marginTop: 50,
  },
});
