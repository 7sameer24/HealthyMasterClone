import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../navigation/HomeScreen';
import SearchScreen from '../navigation/SearchScreen';
import GiftsASmile from '../navigation/GiftsASmile';
import NewArrivlas from '../navigation/NewArrivals';
import ComboOffers from '../navigation/ComboOffers';
import Complimentary from '../navigation/Complimentary';
import About from '../navigation/About';
import TestimonialsManu from '../navigation/TestimonialsManu';
import B2B from '../navigation/B2B';
import Blogs from '../navigation/Blogs';
import OurPolicies from '../navigation/OurPolicies';
import ContactUs from '../navigation/ContactUs';
import {COLORS} from '../constants';
import {colors} from 'react-native-elements';
import ProductDetails from '../components/ItemScreen/ProductScreen/ProductDetails';
import Items from '../components/ItemScreen/Items/Items';
import HeaderInput from '../components/Search/HeaderInput';
import LoginScreen from '../components/Login/LoginScreen';
import getData from '../constants/API/API';
import apiUrl from '../constants/API/apiUrl';
import SearchResult from '../components/Search/SearchResult';

const Stack = createNativeStackNavigator();

function MyStack({navigation}) {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchName();
  }, []);

  const fetchName = async () => {
    const URL = apiUrl.SearchItem;
    const response = await getData(URL);
    const {status} = response;
    if (!status) {
      console.log(response);
      return void 0;
    } else {
      setFilterData(response.data.search_items);
      setMasterData(response.data.search_items);
    }
  };
  const setFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.name ? item.name.toLowerCase() : ''.toUpperCase();
        const textData = text.toLowerCase();
        return itemData.search(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setSearch(text);
    }
  };
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        options={({route}) => ({
          headerStyle: {backgroundColor: colors.success},
          headerTintColor: colors.white,
          headerTitle: () => (
            <HeaderInput
              value={search}
              onChangeText={text => setFilter(text)}
            />
          ),
        })}>
        {() => (
          <SearchScreen
            Data={filterData}
            value={search}
            navigation={navigation}
            NAN={text => setSearch(text)}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Result"
        component={SearchResult}
        options={({route}) => ({
          title: route.params.Name,
          headerStyle: {backgroundColor: colors.success},
          headerTintColor: COLORS.white,
        })}
      />
      <Stack.Screen
        name="Items"
        component={Items}
        options={({route}) => ({
          title: route.params.Name,
          headerStyle: {backgroundColor: colors.success},
          headerTintColor: COLORS.white,
        })}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetails}
        options={({route}) => ({
          headerStyle: {backgroundColor: colors.success},
          headerTintColor: COLORS.white,
        })}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({route}) => ({
          headerStyle: {backgroundColor: colors.success},
          headerTintColor: COLORS.white,
          animation: 'slide_from_right',
        })}
      />
    </Stack.Navigator>
  );
}

const obj = [
  {
    name: 'Home',
    component: MyStack,
    iconName: 'home-outline',
    type: 'ionicon',
    headerShown: false,
    id: 1,
  },
  {
    name: 'Gifts a Smile',
    component: GiftsASmile,
    iconName: 'gift-outline',
    type: 'ionicon',
    id: 2,
  },
  {
    name: 'New a arrivals',
    component: NewArrivlas,
    iconName: 'burst-new',
    type: 'foundation',
    id: 3,
  },
  {
    name: 'Combo offers',
    component: ComboOffers,
    iconName: 'tag',
    type: 'material-community',
    id: 4,
  },
  {
    name: 'Mambership',
    component: ComboOffers,
    iconName: 'person-add-outline',
    type: 'ionicon',
    id: 5,
  },
  {
    name: 'Complimentary',
    component: Complimentary,
    iconName: 'person-add-outline',
    type: 'ionicon',
    id: 6,
  },
  {
    name: 'About',
    component: About,
    iconName: 'person-add-outline',
    type: 'ionicon',
    id: 7,
  },
  {
    name: 'Testimonial',
    component: TestimonialsManu,
    iconName: 'person-add-outline',
    type: 'ionicon',
    id: 8,
  },
  {
    name: 'B2B',
    component: B2B,
    iconName: 'person-add-outline',
    type: 'ionicon',
    id: 9,
  },
  {
    name: 'Blogs',
    component: Blogs,
    iconName: 'person-add-outline',
    type: 'ionicon',
    id: 10,
  },
  {
    name: 'Our Policies',
    component: OurPolicies,
    iconName: 'person-add-outline',
    type: 'ionicon',
    id: 11,
  },
  {
    name: 'Contact Us',
    component: ContactUs,
    iconName: 'person-add-outline',
    type: 'ionicon',
    id: 12,
  },
];

export default obj;
