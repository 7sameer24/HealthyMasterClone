import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
  },
  containerStyle: Grid => ({
    borderRadius: 5,
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 0,
    width: Grid ? 180 : '100%',
    marginHorizontal: Grid ? 5 : 0,
    marginBottom: 3,
    marginTop: 10,
    alignSelf: Grid ? 'center' : null,
    minHeight: Grid ? 260 : null,
  }),
  image: Grid => ({
    width: Grid ? 170 : 95,
    height: Grid ? 100 : 90,
    borderRadius: 5,
    marginRight: Grid ? null : 10,
    alignSelf: Grid ? 'center' : null,
  }),
  Text: Grid => ({
    fontWeight: '500',
    color: COLORS.black,
    fontSize: 13,
    alignSelf: Grid ? 'center' : null,
    marginTop: Grid ? 5 : null,
    textAlign: Grid ? 'center' : null,
  }),
  itemListContainer: {
    flex: 1,
    maxHeight: '90%',
  },
  short_description: Grid => ({
    color: COLORS.darkgray,
    textAlign: Grid ? 'center' : 'left',
    marginRight: Grid ? null : 130,
    fontSize: 13,
    marginHorizontal: Grid ? 10 : null,
  }),
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Fotter: Grid => ({
    flexDirection: Grid ? 'column' : 'row',
    alignSelf: Grid ? 'center' : null,
    marginLeft: Grid ? 0 : 70,
  }),
  contentContainerStyle: Grid => ({
    marginHorizontal: Grid ? null : 10,
    alignSelf: Grid ? 'center' : null,
  }),
  AddCartContainer: Grid => ({
    left: Grid ? null : 40,
    bottom: Grid ? null : 10,
  }),
});
