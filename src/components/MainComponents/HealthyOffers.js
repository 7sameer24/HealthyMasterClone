import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { COLORS, images } from '../../constants';
import { genericStyles } from '../../constants/genericStyles';

const HealthyOffers = ({ Data, navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={genericStyles.bottom(30)}>
      <ImageBackground
        source={images.Banner3}
        fadeDuration={0}
        imageStyle={[genericStyles.height(120), { marginTop: 2 }]}>
        <Text style={styles.Heading}>Healthy Offerings</Text>
        <Divider width={1} style={styles.Divider} color={COLORS.white} />
        <View style={styles.View}>
          {Data.map(data => (
            <TouchableOpacity
              key={data.id}
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate('Items', {
                  Name: data.name,
                  ID: data.id,
                  Count: data.item_count,
                })
              }>
              <Card containerStyle={styles.containerStyle(width, height)}>
                <Image
                  source={{ uri: data.image_fullpath }}
                  style={styles.image}
                />
                <Text style={styles.Text}>{data.name}</Text>
                <Text style={[styles.item_count]}>
                  {data.item_count} Products
                </Text>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default HealthyOffers;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
    color: COLORS.white,
    fontWeight: '500',
    backgroundColor: COLORS.success,
    borderRadius: 7,
    paddingVertical: 5,
    width: '35%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  containerStyle: (width, height) => ({
    width: width / 3.2,
    height: height / 8,
    borderRadius: 5,
    borderWidth: 0.9,
    padding: 0,
    elevation: 2,
    margin: 0,
    marginTop: 35,
    marginHorizontal: 4,
    backgroundColor: COLORS.newColor,
    borderColor: COLORS.success,
  }),
  Divider: {
    marginHorizontal: 170,
  },
  Text: {
    fontWeight: '500',
    color: COLORS.black,
    bottom: 23,
    textAlign: 'center',
    fontSize: 12,
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 80,
    bottom: 25,
    borderRadius: 7,
  },
  View: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  item_count: {
    fontWeight: '500',
    bottom: 23,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 9,
    backgroundColor: COLORS.success,
    color: COLORS.white,
    width: '70%',
    borderRadius: 4,
  },
});
