import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
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
