import * as React from 'react';
import { ScrollView } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { Istory, MangaProps, story } from './Manga.types';
import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import StoryDetails from './StoryDetails/StoryDetails.tsx';
import StoryList from '~/components/StoryList/StoryList.tsx';
import { storiesData } from '~/components/StoryList/StoryList.types.ts';
import { styleCreator } from './Manga.styles';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { RouteProp, useRoute } from '@react-navigation/native';

const Manga = (props: MangaProps) => {
  const { params } = useRoute<RouteProp<{ params: Istory }, 'params'>>();
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <ScrollView>
      <WibuView style={styles.container}>
        <PageTitle title={story.storyInformation?.name} />
        <StoryDetails story={story} />
        <WibuView style={styles.item}>
          <StoryList {...storiesData} viewType="row" />
        </WibuView>
        <WibuText>{params?.id}</WibuText>
      </WibuView>
    </ScrollView>
  );
};

export default Manga;
