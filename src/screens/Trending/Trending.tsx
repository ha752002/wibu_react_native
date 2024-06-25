import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { TrendingProps } from './Trending.types';

import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import StoryList from '~/components/StoryList/StoryList.tsx';
import KeywordList from './KeywordList/KeywordList';

import { storiesData } from '~/components/StoryList/StoryList.types.ts';
import { KeywordData } from './KeywordList/KeywordList.types';

import { useThemeStyles } from '~/hooks/useThemeStyles';
import { styleCreator } from './Trending.styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ITrendingParams } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';
import WibuText from '~/wibu-ui/WibuText/WibuText';

const Trending = (props: TrendingProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const { params } =
    useRoute<RouteProp<{ params: ITrendingParams }, 'params'>>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageTitle title={params?.trendingKeywords || 'Trending'} />
        <KeywordList
          {...KeywordData}
          selectedKeyword={params?.trendingKeywords}
        />
        <WibuText>{params?.id}</WibuText>
        <StoryList stories={storiesData.stories} />
      </View>
    </ScrollView>
  );
};

export default Trending;
