import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, colors, Divider} from 'react-native-elements';
import {COLORS, images} from '../constants';
import getData from '../API/API';
import {genericStyles} from '../constants/genericStyles';
import Home from '../API/apiUrl';

const HealthyOffers = ({onPress, navigation}) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const URL = Home;
    const response = await getData(URL);
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
      {data.length > 0 ? (
        <ImageBackground
          source={images.Banner3}
          fadeDuration={0}
          imageStyle={[genericStyles.height(120), {marginTop: 2}]}>
          <Text style={styles.Heading}>Healthy Offerings</Text>
          <Divider width={1} style={styles.Divider} color={colors.white} />
          <View style={styles.View}>
            {data.map(data => (
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
                <Card containerStyle={[styles.containerStyle]}>
                  <Image
                    source={{uri: data.image_fullpath}}
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
      ) : (
        <ActivityIndicator color={colors.success} size={'large'} />
      )}
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
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: colors.success,
    borderRadius: 7,
    marginHorizontal: 120,
    paddingVertical: 5,
  },
  containerStyle: {
    width: 114,
    height: 100,
    borderRadius: 5,
    borderWidth: 0.9,
    padding: 0,
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
    justifyContent: 'flex-start',
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
