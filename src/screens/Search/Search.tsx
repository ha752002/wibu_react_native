import * as React from 'react';
import { ScrollView } from 'react-native';

// import { Text, View } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import SearchForm from '~/components/SearchForm/SearchForm';
import GenreList from './GenreList/GenreList.tsx';
import StoryList from '~/components/StoryList/StoryList.tsx';

import { SearchProps, SearchData } from './Search.types';
import { following } from '~/components/StoryList/StoryList.types.ts';

import { styleCreator } from './Search.styles.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';

const Search = (props: SearchProps) => {
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <ScrollView>
      <WibuView style={styles.container}>
        <PageTitle title="Search" />
        <SearchForm />
        <GenreList genres={SearchData.genres} />
        <StoryList {...following} viewType="row" />
      </WibuView>
    </ScrollView>
  );
};

export default Search;
