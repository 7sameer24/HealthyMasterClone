import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import CateData from '../../assets/Data/CateData';
import {COLORS} from '../constants';
import {genericStyles} from '../constants/genericStyles';

const HealthyOffers = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1469178066045-855bb6994cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      }}
      fadeDuration={0}
      imageStyle={genericStyles.height(120)}
      style={{bottom: 30, marginBottom: 20}}>
      <Text style={styles.Heading}>Healthy Offerings</Text>
      <Divider width={1} style={styles.Divider} />
      <View>
        <FlatList
          data={CateData}
          keyExtractor={item => item.id}
          // scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({item}) => (
            <Card
              containerStyle={[
                styles.containerStyle,
                {backgroundColor: item.BG},
              ]}
              wrapperStyle={genericStyles.ai('center')}>
              <Image source={{uri: item.ImageSource}} style={styles.image} />
              <Text style={styles.Text}>{item.heading}</Text>
              <Text style={styles.Text}>{item.Quantity}</Text>
            </Card>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default HealthyOffers;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
    color: COLORS.white,
  },
  containerStyle: {
    width: 104,
    height: 95,
    borderRadius: 5,
    borderWidth: 0,
    padding: 0,
    borderTopLeftRadius: 55,
    elevation: 10,
  },
  Divider: {
    marginHorizontal: 170,
    marginBottom: 10,
  },
  Text: {
    fontWeight: '500',
    color: COLORS.black,
    bottom: 29,
  },
  image: {
    alignSelf: 'center',
    width: 95,
    height: 85,
    bottom: 25,
    borderRadius: 7,
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
