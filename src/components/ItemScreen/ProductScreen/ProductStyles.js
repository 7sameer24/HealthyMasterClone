import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import {COLORS} from '../../../constants';

export default styles = StyleSheet.create({
  ContaierStyle: {
    bottom: 0,
    marginVertical: 10,
  },
  slideContaier: {
    width: '97%',
    borderRadius: 0,
    bottom: 0,
  },
  ProductName: {
    fontSize: 15,
    color: COLORS.black,
    marginBottom: 3,
    fontWeight: '700',
  },
  ProductDescription: {
    fontSize: 14,
    color: COLORS.darkgray,
    fontWeight: '500',
  },
  quantityContanier: {
    marginLeft: 10,
    flexDirection: 'row',
    marginVertical: 10,
  },
  quantity: {
    fontWeight: 'bold',
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  quantityTouchable: selectedGM => ({
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 4,
    borderColor: selectedGM ? colors.success : COLORS.darkgray,
  }),
  sales_rate: {
    marginLeft: 3,
    color: COLORS.red,
    fontSize: 15,
    fontWeight: '700',
  },
  relatedProducts: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 5,
    marginLeft: 7,
  },
  CardContainer: {
    borderRadius: 5,
    padding: 0,
    width: 200,
    marginBottom: 0,
    marginHorizontal: 5,
    borderColor: COLORS.lightGray2,
    alignSelf: 'center',
    paddingTop: 5,
    marginTop: 10,
  },
  styleImage: {
    width: 190,
    height: 100,
    alignSelf: 'center',
    borderRadius: 5,
  },
  TextStyle: {
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: '500',
    color: COLORS.black,
    fontSize: 14,
  },
  short_description: {
    color: COLORS.darkgray,
    textAlign: 'center',
    fontSize: 13,
  },
  container: {
    marginLeft: 0,
    alignSelf: 'center',
    bottom: 20,
  },
  buttonStyle: {
    backgroundColor: colors.success,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    paddingVertical: 10,
  },
  ButtonCon: {
    width: 180,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 5,
  },
  ViewContainer: {
    flex: 1,
    backgroundColor: COLORS.transparent,
    marginBottom: 15,
  },
  RelatedProductsCon: {
    marginLeft: 7,
    paddingBottom: 10,
  },
  titleStyle: {
    fontWeight: '400',
    fontSize: 13,
  },
});
