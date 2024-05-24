import * as React from 'react';
// import { Text, View } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import SearchForm from '~/components/SearchForm/SearchForm';
import GenreList from './GenreList/GenreList.tsx';

import { SearchProps, SearchData } from './Search.types';

import { styleCreator } from './Search.styles.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';

const Search = (props: SearchProps) => {
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <PageTitle title="Search" />
      <SearchForm />
      <GenreList genres={SearchData.genres} />
    </WibuView>
  );
};

export default Search;
