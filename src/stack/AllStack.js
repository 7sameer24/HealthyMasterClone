import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import {COLORS} from '../constants';
import AnyIcon from '../components/AnyIcon';
import {StyleSheet} from 'react-native';
import obj from './NavigationObj';

const Drawer = createDrawerNavigator();

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
        drawerItemStyle: styles.drawerItemStyle,
      }}>
      {obj.map((_, key) => (
        <Drawer.Screen
          key={_.id}
          options={{
            headerShown: _.headerShown,
            // drawerIcon: () => (
            //   <AnyIcon name={_.iconName} type={_.type} color={COLORS.white} />
            // ),
          }}
          name={_.name}
          component={_.component}
        />
      ))}
    </Drawer.Navigator>
  );
}

export default MyDrawer;

const styles = StyleSheet.create({
  drawerLabelStyle: {
    fontSize: 17,
    // marginLeft: -23,
  },
  drawerItemStyle: {
    marginBottom: 0,
    height: 49,
    marginTop: 0,
  },
});
