import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { STORYBOOK_ENABLED } from '@env';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from '~/store';
import 'react-native-gesture-handler';
import ApplicationNavigator from '~/navigators/ApplicationcNavigator/ApplicationNavigator.tsx';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (STORYBOOK_ENABLED === 'true') {
    const StoryBook = require('../.storybook').default;
    return <StoryBook />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider>
            {/*<Login />*/}
            <ApplicationNavigator />
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

let AppEntryPoint = App;
export default AppEntryPoint;
