import * as React from 'react';
import { View, ScrollView } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import StoryContent from './StoryContent/StoryContent.tsx';
import BottomToolbar from './BottomToolbar/BottomToolbar.tsx';
import PageTitle from '~/components/PageTitle/PageTitle.tsx';

import { ChapterProps, storyContentData } from './Chapter.types.ts';

import { styleCreator } from './Chapter.styles.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { useRoute, RouteProp } from '@react-navigation/native';
import { IParams } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
const Chapter = (props: ChapterProps) => {
  // const { urlImg } = props;

  const styles = useThemeStyles(styleCreator, props, []);
  const { params } = useRoute<RouteProp<{ params: IParams }, 'params'>>();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <PageTitle title={'chapter ' + params.id} />
        <WibuView>
          <StoryContent urlImg={storyContentData.urlImg} />
        </WibuView>
      </ScrollView>
      <BottomToolbar />
    </View>
  );
};

export default Chapter;
