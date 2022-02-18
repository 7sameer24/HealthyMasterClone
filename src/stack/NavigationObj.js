import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GiftsASmile from '../navigation/GiftASmile';
import NewArrivlas from '../navigation/NewArrivals';
import ComboOffers from '../navigation/ComboOffers';
import Complimentary from '../navigation/Complimentary';
import About from '../navigation/About';
import TestimonialsManu from '../navigation/TestimonialsManu';
import B2B from '../navigation/B2B';
import Blogs from '../navigation/Blogs';
import OurPolicies from '../navigation/OurPolicies';
import ContactUs from '../navigation/ContactUs';
import Items from '../components/ItemScreen/Items/Items';
import SearchResult from '../components/Search/SearchResult';
import GiftByOccasion from '../components/GiftAll/GiftByOccasion';
import GiftByFestival from '../components/GiftAll/GiftByFestival';
import StackArr from './StackArr';
import { COLORS } from '../constants';
import GiftListItem from '../components/GiftAll/GiftListItem';
import ProductDetails from '../components/ItemScreen/ProductScreen/ProductDetails';
import RegisterScreen from '../components/Login/RegisterScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerStyle: { backgroundColor: COLORS.success },
        headerTintColor: COLORS.white,
      }}>
      {StackArr().map(_ => (
        <Stack.Screen
          name={_.name}
          component={_.component}
          options={({ route }) => ({
            headerShown: _.headerShown,
          })}
          key={_.name}
        />
      ))}
      <Stack.Screen
        name="Result"
        component={SearchResult}
        options={({ route }) => ({
          title: route.params.Name,
          headerStyle: { backgroundColor: COLORS.success },
          headerTintColor: COLORS.white,
        })}
      />
      <Stack.Screen
        name="Items"
        component={Items}
        options={({ route }) => ({
          title: route.params.Name,
          headerStyle: { backgroundColor: COLORS.success },
          headerTintColor: COLORS.white,
          headerShown: false,
        })}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

const GiftASmile = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerStyle: { backgroundColor: COLORS.success },
        headerTintColor: COLORS.white,
      }}>
      <Stack.Screen
        name="Gifts a Smile"
        component={GiftsASmile}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="Gift By Occasion" component={GiftByOccasion} />
      <Stack.Screen name="Gift By Festival" component={GiftByFestival} />
      <Stack.Screen
        name="Gift List"
        component={GiftListItem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
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
    name: 'Gift a Smile',
    component: GiftASmile,
    iconName: 'gift-outline',
    type: 'ionicon',
    headerShown: false,
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
