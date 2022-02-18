import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import AllStack from './src/stack/AllStack';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import reduxStore from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  const scheme = useColorScheme();
  // const { store, persistor } = reduxStore();
  return (
    <Provider store={reduxStore}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer
        theme={scheme ? DefaultTheme : DarkTheme}
        onReady={() => RNBootSplash.hide({ fade: true })}>
        <AllStack />
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
