import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../navigation/HomeScreen';
import SearchScreen from '../navigation/SearchScreen';
import GiftsASmile from '../navigation/GiftsASmile';
import CustomDrawer from '../components/CustomDrawer';
import {COLORS} from '../constants';
import AnyIcon from '../components/AnyIcon';
import {StyleSheet} from 'react-native';
import NewArrivlas from '../navigation/NewArrivals';
import ComboOffers from '../navigation/ComboOffers';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: COLORS.white,
        drawerInactiveBackgroundColor: COLORS.transparent,
        drawerInactiveTintColor: COLORS.white,
        drawerType: 'slide',
        drawerLabelStyle: styles.drawerLabelStyle,
      }}>
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: () => (
            <AnyIcon name={'home'} type={'ionicon'} color={COLORS.white} />
          ),
        }}
        name="Home"
        component={MyStack}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <AnyIcon name={'gift'} type={'ionicon'} color={COLORS.white} />
          ),
        }}
        name="Gifts a Smile"
        component={GiftsASmile}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <AnyIcon name={'gift'} type={'ionicon'} color={COLORS.white} />
          ),
        }}
        name="New arrivlas"
        component={NewArrivlas}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <AnyIcon name={'gift'} type={'ionicon'} color={COLORS.white} />
          ),
        }}
        name="Combo Offers"
        component={ComboOffers}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <AnyIcon name={'gift'} type={'ionicon'} color={COLORS.white} />
          ),
        }}
        name="Combo Offersr"
        component={ComboOffers}
      />
      {/* <Drawer.Screen
        options={{
          drawerIcon: () => (
            <AnyIcon name={'gift'} type={'ionicon'} color={COLORS.white} />
          ),
        }}
        name="Giftsssaa"
        component={Gift}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <AnyIcon name={'gift'} type={'ionicon'} color={COLORS.white} />
          ),
        }}
        name="Giftssss"
        component={Gift} */}
      {/* /> */}
    </Drawer.Navigator>
  );
}

export default MyDrawer;

const styles = StyleSheet.create({
  drawerLabelStyle: {
    fontSize: 17,
    marginLeft: -23,
  },
});
