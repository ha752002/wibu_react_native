import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {STORYBOOK_ENABLED} from '@env';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

let AppEntryPoint = App;

if (STORYBOOK_ENABLED === 'true') {
  AppEntryPoint = require('./.ondevice').default;
}
export default AppEntryPoint;
