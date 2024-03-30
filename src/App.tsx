import React, { useEffect } from 'react';
import { Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { STORYBOOK_ENABLED } from '@env';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (STORYBOOK_ENABLED === 'true') {
    const StoryBook = require('../.storybook').default;
    return <StoryBook />;
  }
  return (
    <WibuView>
      <Text>Open up App.tsx to start working on your app!</Text>
    </WibuView>
  );
}

let AppEntryPoint = App;
export default AppEntryPoint;
