import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { STORYBOOK_ENABLED } from '@env';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ApplicationNavigator from '~/navigators/ApplicationcNavigator/ApplicationNavigator.tsx';
import { PaperProvider } from 'react-native-paper';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (STORYBOOK_ENABLED === 'true') {
    const StoryBook = require('../.storybook').default;
    return <StoryBook />;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <ApplicationNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

let AppEntryPoint = App;
export default AppEntryPoint;
