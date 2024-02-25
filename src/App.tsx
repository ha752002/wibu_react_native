import React from 'react';
import {Text, View} from 'react-native';
import {WibuButton} from './wibu-ui/WibuButton/WibuButton.tsx';

function App() {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <WibuButton
        onPress={() => {}}
        appearance={'filled'}
        text={'assas'}
        variant={'warning'}
      />
    </View>
  );
}

let AppEntryPoint = App;
export default AppEntryPoint;
