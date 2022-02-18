import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {COLORS} from '../../constants';
import {Button} from 'react-native-elements';
import {genericStyles} from '../../constants/genericStyles';
import Data from './ShortArr';

const GiftByOccasion = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.Container}
      nestedScrollEnabled={true}>
      {Data().map(data => (
        <View style={data.view} key={data.OccasionId}>
          <WebView source={data.OccasionSource} />
          <Button
            title="Shop Now"
            containerStyle={styles.ButtonContainer}
            buttonStyle={genericStyles.bg(COLORS.success)}
            onPress={() =>
              navigation.navigate('Gift List', {ID: data.OccasionId})
            }
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default GiftByOccasion;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.white,
    marginTop: 10,
  },
  ButtonContainer: {
    width: '25%',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
