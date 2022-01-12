import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import AllStack from './src/stack/AllStack';
import {useColorScheme} from 'react-native';

const App = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme ? DefaultTheme : DarkTheme}>
      <AllStack />
    </NavigationContainer>
  );
};

export default App;
