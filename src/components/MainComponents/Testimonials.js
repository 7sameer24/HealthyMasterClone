import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {COLORS} from '../../constants';
import {genericStyles} from '../../constants/genericStyles';
import AnyIcon from './AnyIcon';

const Testimonials = ({Data}) => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Our Clients say</Text>
      <Divider width={1} style={styles.Divider} color={COLORS.lawngreen} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Data.map(data => (
          <View key={data.id}>
            <Card
              containerStyle={[
                styles.containerStyle(width, height),
                {backgroundColor: data.color},
              ]}>
              <AnyIcon
                name="format-quote-open"
                type="material-community"
                color={COLORS.opacity}
                size={40}
              />
              <Text
                style={styles.description}
                numberOfLines={7}
                textBreakStrategy="highQuality">
                {data.description}
              </Text>
              <View style={genericStyles.mt(60)}>
                <Image source={{uri: data.image}} style={styles.image} />
                <Text style={styles.Name}>{data.name}</Text>
              </View>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Testimonials;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    bottom: 10,
    paddingVertical: 10,
  },
  Heading: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
    color: COLORS.black,
    fontWeight: '500',
  },
  containerStyle: (width, height) => ({
    borderRadius: 4,
    borderWidth: 0,
    padding: 0,
    width: width / 1.5,
    height: height / 2.5,
    marginBottom: 0,
    marginHorizontal: 8,
  }),
  Divider: {
    marginHorizontal: 190,
  },
  description: {
    fontWeight: '500',
    color: COLORS.white,
    fontSize: 15,
    textAlign: 'left',
    marginHorizontal: 10,
    marginBottom: 0,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: COLORS.white,
    borderWidth: 2,
    alignSelf: 'center',
  },
  Name: {
    fontWeight: '700',
    color: COLORS.white,
    fontSize: 14,
    textAlign: 'center',
  },
});
