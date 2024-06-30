import * as React from 'react';
import { ScrollView } from 'react-native';

import SearchForm from '~/components/SearchForm/SearchForm';
import StoryList from '~/components/StoryList/StoryList.tsx';
import { storiesData } from '~/components/StoryList/StoryList.types.ts';

import { StoryFilterProps } from './StoryFilter.types.ts';

import { styleCreator } from './StoryFilter.styles.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  ApplicationNavigationProps,
  IStoryFilterParams,
} from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import { SearchData } from '../Search/Search.types.ts';
import SelectedGenre from './SelectedGenre/SelectedGenre.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

const StoryFilter = (props: StoryFilterProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const { params } =
    useRoute<RouteProp<{ params: IStoryFilterParams }, 'params'>>();

  const navigation = useNavigation<ApplicationNavigationProps>();
  const currentRoute =
    navigation.getState().routes[navigation.getState().index];

  return (
    <ScrollView style={styles.container}>
      <PageTitle title={'StoryFilter'} />

      <WibuView>
        <SearchForm
          searchContent={params.searchKeywords}
          sort={params.sort}
          nextScreen={currentRoute.name}
          multiSelectedGenreId={params.id}
        />
        {/* <Sort
          selectedGenreId={params.id}
          SelectedSort={params.sort}
          searchContent={params.searchKeywords}
        /> */}
        <SelectedGenre
          genres={SearchData.genres}
          selectedGenreId={params.id}
          searchContent={params.searchKeywords}
        />
        <StoryList
          {...storiesData}
          more={1}
          Sort="update"
          viewType="column"
          title="filtering results"
        />
        <WibuText>Current Screen: {currentRoute.name}</WibuText>
      </WibuView>
    </ScrollView>
  );
};

export default StoryFilter;
