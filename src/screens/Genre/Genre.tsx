import * as React from 'react';
import { ScrollView } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

// import StoryContent from './StoryContent/StoryContent.tsx';
// import BottomToolbar from './BottomToolbar/BottomToolbar.tsx';
import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import SearchForm from '~/components/SearchForm/SearchForm';
import GenreDetails from './GenreDetails/GenreDetails.tsx';
import Filter from './Filter/Filter.tsx';
import Sort from './Sort/Sort.tsx';
import StoryList from '~/components/StoryList/StoryList.tsx';

// import UserInformation from '~/components/userInformation/UserInformation';
import { GenreProps, GenreData } from './Genre.types.ts';
import { SearchData } from '../Search/Search.types.ts';

import { styleCreator } from './Genre.styles.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { useRoute, RouteProp } from '@react-navigation/native';
import { IGenresParams } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
const Genre = (props: GenreProps) => {
  // const { urlImg } = props;

  const styles = useThemeStyles(styleCreator, props, []);
  const { params } = useRoute<RouteProp<{ params: IGenresParams }, 'params'>>();
  return (
    <ScrollView style={styles.container}>
      <PageTitle title={GenreData.genre?.genre} />
      <SearchForm
        searchContent={params.searchKeywords}
        sort={params.sort}
        selectedGenreId={params.id}
      />
      <WibuView style={styles.groupFilter}>
        <Filter
          genres={SearchData.genres}
          selectedGenreId={params.id}
          sort={params.sort}
          searchContent={params.searchKeywords}
        />
        <Sort
          selectedGenreId={params.id}
          SelectedSort={params.sort}
          searchContent={params.searchKeywords}
        />
      </WibuView>
      <GenreDetails
        Genre={GenreData.genre}
        selectedGenreId={params.id}
        searchContent={params.searchKeywords}
      />
      <StoryList
        title={GenreData?.genre?.genre + ' comics'}
        stories={GenreData.story}
      />
      <WibuText>{params.id}</WibuText>
      <WibuText>{params.sort}</WibuText>
      <WibuText>{params.searchKeywords}</WibuText>
    </ScrollView>
  );
};

export default Genre;
