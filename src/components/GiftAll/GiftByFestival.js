import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Data from './ShortArr';
import WebView from 'react-native-webview';
import {Button} from 'react-native-elements';
import {genericStyles} from '../../constants/genericStyles';
import {COLORS} from '../../constants';

const GiftByFestival = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.Container}
      nestedScrollEnabled={true}>
      {Data().map(data => (
        <View style={data.festivalView} key={data.festivalId}>
          <WebView source={data.festivalSource} />
          <Button
            title="Shop Now"
            containerStyle={styles.ButtonContainer}
            buttonStyle={genericStyles.bg(COLORS.success)}
            onPress={() =>
              navigation.navigate('Gift List', {ID: data.festivalId})
            }
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default GiftByFestival;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.white,
    marginTop: 10,
  },
  ButtonContainer: {
    width: 100,
    alignSelf: 'center',
    borderRadius: 5,
  },
});
