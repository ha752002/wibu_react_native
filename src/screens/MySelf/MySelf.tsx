import * as React from 'react';
import { ScrollView } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import StoryList from '~/components/StoryList/StoryList';
import {
  following,
  emptyList,
} from '~/components/StoryList/StoryList.types.ts';

import UserInformation from '~/components/userInformation/UserInformation';
import { userData } from '~/components/userInformation/UserInformation.types';
import Otherinformation from './Otherinformation/Otherinformation.tsx';
import PageTitle from '~/components/PageTitle/PageTitle.tsx';

import { MySelfProps } from './MySelf.types.ts';

import { styleCreator } from './MySelf.styles.ts';

import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IMyselfParams } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';

const MySelf = (props: MySelfProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const { params } = useRoute<RouteProp<{ params: IMyselfParams }, 'params'>>();
  const selectedContent = params?.selectedContent || 'bookcase';

  return (
    <ScrollView>
      <WibuView style={styles.container}>
        <PageTitle title="My Profile" />
        <UserInformation {...userData} />
        <Otherinformation {...userData} selectedContent={selectedContent} />
        {selectedContent === 'bookcase' ? (
          <StoryList {...following} viewType="column" title="" />
        ) : null}
        {selectedContent === 'followers' ? (
          <StoryList {...emptyList} title="" />
        ) : null}
        {selectedContent === 'storyPosted' ? (
          <StoryList {...emptyList} title="" />
        ) : null}
        {/* <StoryList {...following} viewType="column" title="" /> */}
        {/* <StoryList {...emptyList} /> */}
      </WibuView>
    </ScrollView>
  );
};

export default MySelf;
