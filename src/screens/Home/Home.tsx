import * as React from 'react';
import { View } from 'react-native';
import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '~/enums/screenNames.enum.ts';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

const Home = () => {
  const navigation = useNavigation<ApplicationNavigationProps>();
  return (
    <View>
      <WibuIcon name={EIconName.HOME} size={ESize.S} />
      <WibuButton
        appearance={'filled'}
        onPress={() => {
          navigation.navigate(ScreenNames.LOGIN);
        }}
        variant={'primary'}
      >
        Home
      </WibuButton>
    </View>
  );
};

export default Home;
