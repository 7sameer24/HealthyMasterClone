import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import AllStack from './src/stack/AllStack';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={scheme ? DefaultTheme : DarkTheme}
        onReady={() => RNBootSplash.hide({fade: true})}>
        <AllStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
