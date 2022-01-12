import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from '../navigation/HomeScreen';
import SearchScreen from '../navigation/SearchScreen';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, images} from '../constants';
import Gift from '../navigation/Gift';

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

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{flexDirection: 'row'}}>
        <Image source={images.avatar_5} style={styles.Image} />
        <Text style={styles.head}>Welcome</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={MyStack}
      />
      <Drawer.Screen name="Gift" component={Gift} />
      <Drawer.Screen name="Gifts" component={Gift} />
      <Drawer.Screen name="Giftss" component={Gift} />
      <Drawer.Screen name="Giftsss" component={Gift} />
      <Drawer.Screen name="Giftsssaa" component={Gift} />
      <Drawer.Screen name="Giftssss" component={Gift} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;

const styles = StyleSheet.create({
  Image: {
    width: 65,
    height: 65,
    backgroundColor: COLORS.darkgray,
    borderRadius: 30,
    marginLeft: 10,
  },
  head: {
    fontSize: 25,
    color: COLORS.black,
    marginTop: 10,
    left: 20,
  },
});
