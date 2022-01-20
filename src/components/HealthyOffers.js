import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Card, colors, Divider} from 'react-native-elements';
import {COLORS} from '../constants';
import getData from '../API/API';
import {genericStyles} from '../constants/genericStyles';

const HealthyOffers = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await getData();
    const {status} = response;
    if (!status) {
      console.log(response);
      return void 0;
    } else {
      setData(
        response.data.dynamic[5].DynamicList_cat[0].child_item_categories,
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={genericStyles.bottom(30)}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1469178066045-855bb6994cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        }}
        fadeDuration={0}
        imageStyle={genericStyles.height(120)}>
        <Text style={styles.Heading}>Healthy Offerings</Text>
        <Divider width={1} style={styles.Divider} color={COLORS.white} />
        <View style={styles.View}>
          {data.map(data => (
            <Card containerStyle={[styles.containerStyle]} key={data.id}>
              <Image source={{uri: data.image_fullpath}} style={styles.image} />
              <Text style={styles.Text}>{data.name}</Text>
              <Text style={[styles.item_count]}>
                {data.item_count} Products
              </Text>
            </Card>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default HealthyOffers;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    color: COLORS.white,
    textAlign: 'center',
  },
  containerStyle: {
    width: 114,
    height: 100,
    borderRadius: 5,
    borderWidth: 0.9,
    padding: 0,
    // borderTopLeftRadius: 70,
    elevation: 2,
    margin: 20,
    marginTop: 35,
    marginHorizontal: 8,
    backgroundColor: COLORS.newColor,
    borderColor: colors.success,
  },
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
    width: 90,
    height: 80,
    bottom: 25,
    borderRadius: 7,
  },
  View: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item_count: {
    fontWeight: '500',
    bottom: 23,
    textAlign: 'center',
    fontSize: 9,
    backgroundColor: colors.success,
    color: colors.white,
    marginHorizontal: 20,
    borderRadius: 5,
  },
});
