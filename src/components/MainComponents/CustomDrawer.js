import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {genericStyles} from '../../constants/genericStyles';
import SocialMedia from '../../constants/SocialMediaIcons';
import {COLORS, images} from '../../constants';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const CustomDrawer = props => {
  const [name, setName] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // console.log('name', name, 'user', user);

  const result = user => {
    if (user === null) {
      setName('');
      null;
    } else {
      firestore()
        .collection(user.uid)
        .doc('Username')
        .onSnapshot(documentSnapshot => {
          setName(documentSnapshot.data());
        });
    }
  };

  function onAuthStateChanged(user) {
    setUser(user);
    result(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <View style={genericStyles.fill}>
      <ImageBackground
        source={images.Drawer}
        style={genericStyles.fill}
        blurRadius={0}
        fadeDuration={0}>
        <DrawerContentScrollView {...props}>
          <TouchableOpacity
            activeOpacity={user === null ? 2 : 0.5}
            onPress={() =>
              user === null
                ? null
                : props.navigation.navigate('Profile', {
                    Name: name.name,
                    Email: auth().currentUser.email,
                  })
            }>
            <View style={styles.View}>
              <Image source={images.avatar_5} style={styles.Image} />
              <View style={[genericStyles.FD('column'), {marginLeft: 20}]}>
                <Text
                  style={styles.head}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {user === null ? 'welcome' : name.name}
                </Text>
                {user === null ? (
                  <Button
                    title="Login"
                    type="clear"
                    containerStyle={styles.btnContainer}
                    titleStyle={styles.titleStyle}
                    onPress={() => props.navigation.navigate('Login')}
                  />
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={genericStyles.bottom(13)}>
          <Text style={styles.OurP}>Our Presence</Text>
          <View style={styles.View2}>
            {SocialMedia.map(_ => (
              <Image
                key={_.id}
                source={{uri: _.IconName}}
                style={styles.image}
              />
            ))}
          </View>
          <Text style={styles.OurP}>App version: 2.0.4</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  Image: {
    width: 65,
    height: 65,
    borderRadius: 30,
    marginLeft: 10,
    borderRadius: 50,
    borderColor: COLORS.success,
    borderWidth: 1,
  },
  head: {
    fontSize: 19,
    color: COLORS.white,
    marginTop: 10,
    width: 150,
    textAlign: 'center',
  },
  View: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  OurP: {
    color: COLORS.black,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 35,
    height: 35,
    marginVertical: 5,
  },
  btnContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  titleStyle: {
    color: COLORS.success,
    fontSize: 15,
  },
});
