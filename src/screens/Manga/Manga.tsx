import * as React from 'react';
import { ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-virtualized-view';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

import { MangaProps } from './Manga.types';
import { story } from './Manga.types';

import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import StoryDetails from './StoryDetails/StoryDetails.tsx';
import StoryList from '~/components/StoryList/StoryList.tsx';
import { storiesData } from '~/components/StoryList/StoryList.types.ts';

import { styleCreator } from './Manga.styles';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { useRoute, RouteProp } from '@react-navigation/native';
import { IParams } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';

const Manga = (props: MangaProps) => {
  // const { story } = props;
  console.log(121111);
  const { params } = useRoute<RouteProp<{ params: IParams }, 'params'>>();
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <ScrollView>
      <WibuView style={styles.container}>
        <PageTitle title={story.story.story?.name} />
        <StoryDetails {...story} />
        <WibuView style={styles.item}>
          <StoryList {...storiesData} viewType="row" />
          <WibuText>{params?.id}</WibuText>
        </WibuView>
      </WibuView>
    </ScrollView>
  );
};

export default Manga;
