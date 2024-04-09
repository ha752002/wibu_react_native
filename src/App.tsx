import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { STORYBOOK_ENABLED } from '@env';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Test } from '~/Test.tsx';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (STORYBOOK_ENABLED === 'true') {
    const StoryBook = require('../.storybook').default;
    return <StoryBook />;
  }

  return (
    <GestureHandlerRootView>
      <Test />
    </GestureHandlerRootView>
  );
}

let AppEntryPoint = App;
export default AppEntryPoint;
