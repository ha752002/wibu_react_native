import * as React from 'react';
import { ScrollView } from 'react-native';
// import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';
// import { useNavigation } from '@react-navigation/native';
// import { ScreenNames } from '~/enums/screenNames.enum.ts';
// import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import SearchForm from '~/components/SearchForm/SearchForm';
import UserInformation from '~/components/userInformation/UserInformation';
import { userData } from '~/components/userInformation/UserInformation.types';
import StoryList from '~/components/StoryList/StoryList.tsx';
import {
  storiesData,
  storiesData2,
  following,
} from '~/components/StoryList/StoryList.types.ts';

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
    <ScrollView style={styles.container}>
      <UserInformation {...userData} />
      <SearchForm />
      <StoryList {...storiesData} more={1} Sort="view" viewType="row" />
      <StoryList
        {...storiesData2}
        viewType="row"
        more={1}
        Sort="view"
        fullScreen
      />
      {/* following */}
      <StoryList
        {...storiesData2}
        viewType="ratings"
        more={1}
        Sort="view"
        title="Top comics"
      />
      <StoryList {...following} more={1} Sort="view" viewType="row" />

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
    </ScrollView>
  );
};

export default Home;
