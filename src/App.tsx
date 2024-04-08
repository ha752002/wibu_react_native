import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { STORYBOOK_ENABLED } from '@env';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import { FlatList } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (STORYBOOK_ENABLED === 'true') {
    const StoryBook = require('../.storybook').default;
    return <StoryBook />;
  }

  const list = [
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
    {
      name: 'ha',
      age: 1,
    },
  ];

  return (
    <WibuView display={'flex'} gap={4} flexDirection={'column'}>
      <FlatList
        data={list}
        // ItemSeparatorComponent={() => {
        //   return <WibuView height={5} />;
        // }}
        renderItem={({ item }) => {
          return (
            <WibuView padding={10} backgroundColor={'green'}>
              <WibuText color={'fgWhite'}>{item.name}</WibuText>
            </WibuView>
          );
        }}
      />
    </WibuView>
  );
}

let AppEntryPoint = App;
export default AppEntryPoint;
