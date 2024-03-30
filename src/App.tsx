import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { STORYBOOK_ENABLED } from '@env';
import WibuCheckBox from './wibu-ui/WibuCheckBox/WibuCheckBox.tsx';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (STORYBOOK_ENABLED === 'true') {
    const StoryBook = require('../.storybook').default;
    return <StoryBook />;
  }

  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <WibuCheckBox checked={'selected'} label={'aaaaaaaa'} />
      <WibuCheckBox checked={'selected'} label={'dsdsdsd'} />
      <WibuCheckBox checked={'selected'} label={'asa'} />
      <WibuCheckBox checked={'selected'} label={'sas'} />
    </View>
  );
}

let AppEntryPoint = App;
export default AppEntryPoint;
