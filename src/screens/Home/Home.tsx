import * as React from 'react';
import { View } from 'react-native';
// import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';
// import { useNavigation } from '@react-navigation/native';
// import { ScreenNames } from '~/enums/screenNames.enum.ts';
// import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import SearchForm from '~/components/SearchForm/SearchForm';
import UserInformation from '~/components/userInformation/UserInformation';
import { userData } from '~/components/userInformation/UserInformation.types';
import StoryListItem from '~/components/StoryListItem/StoryListItem';
import {
  storiesData,
  storiesData2,
} from '~/components/StoryListItem/StoryListItem.types';

import { HomeProps } from './Home.types.ts';

import { styleCreator } from './Home.styles';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
// import { ESize } from '~/enums/size.enums.ts';

const Home = (props: HomeProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  // const navigation = useNavigation<ApplicationNavigationProps>();
  return (
    <View style={styles.container}>
      <UserInformation {...userData} />
      <SearchForm />
      <StoryListItem {...storiesData} />
      <StoryListItem {...storiesData2} />

      {/* <WibuIcon name={EIconName.HOME} size={ESize.S} />
      <WibuButton
        appearance={'filled'}
        onPress={() => {
          navigation.navigate(ScreenNames.LOGIN);
        }}
        variant={'primary'}
      >
        Home
      </WibuButton> */}
    </View>
  );
};

export default Home;
