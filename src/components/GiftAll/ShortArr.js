import {StyleSheet} from 'react-native';

const Data = () => {
  return [
    {
      OccasionId: 30,
      festivalId: 31,
      OccasionSource: {uri: 'https://healthymaster.in/occasion_valentine.php'},
      festivalSource: {uri: 'https://healthymaster.in/festival_diwali.php'},
      view: styles.WebView,
      festivalView: styles.festivalView,
    },
    {
      OccasionId: 32,
      festivalId: 35,
      OccasionSource: {uri: 'https://healthymaster.in/occasion_birthday.php'},
      festivalSource: {uri: 'https://healthymaster.in/festival_holi.php'},
      view: styles.WebView1,
      festivalView: styles.festivalView1,
    },
    {
      OccasionId: 33,
      festivalId: 36,
      OccasionSource: {
        uri: 'https://healthymaster.in/occasion_anniversary.php',
      },
      festivalSource: {uri: 'https://healthymaster.in/festival_raksha.php'},
      view: styles.WebView2,
      festivalView: styles.festivalView2,
    },
    {
      OccasionId: 34,
      festivalId: 37,
      OccasionSource: {uri: 'https://healthymaster.in/occasion_cristmas.php'},
      festivalSource: {uri: 'https://healthymaster.in/festival_ganesh.php'},
      view: styles.WebView3,
      festivalView: styles.festivalView3,
    },
  ];
};
export default Data;
const styles = StyleSheet.create({
  WebView: {
    height: 950,
    overflow: 'hidden',
  },
  WebView1: {
    height: 830,
    overflow: 'hidden',
  },
  WebView2: {
    height: 800,
    overflow: 'hidden',
  },
  WebView3: {
    height: 750,
    overflow: 'hidden',
    marginBottom: 20,
  },
  festivalView: {
    height: 780,
    overflow: 'hidden',
  },
  festivalView1: {
    height: 680,
    overflow: 'hidden',
  },
  festivalView2: {
    height: 730,
    overflow: 'hidden',
  },
  festivalView3: {
    height: 730,
    overflow: 'hidden',
    marginBottom: 20,
  },
});
