import * as React from 'react';
import { ScrollView } from 'react-native';

import StoryList from '~/components/StoryList/StoryList';
import { following } from '~/components/StoryListItem/StoryListItem.types';

import UserInformation from '~/components/userInformation/UserInformation';
import { userData } from '~/components/userInformation/UserInformation.types';
import Otherinformation from './Otherinformation/Otherinformation.tsx';

import { MySelfProps } from './MySelf.types.ts';

import { styleCreator } from './MySelf.styles.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';

const MySelf = (props: MySelfProps) => {
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <ScrollView style={styles.container}>
      <UserInformation {...userData} />
      <Otherinformation {...userData} />
      <StoryList {...following} />
    </ScrollView>
  );
};

export default MySelf;
