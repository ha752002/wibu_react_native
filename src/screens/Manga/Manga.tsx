import * as React from 'react';
import { ScrollView } from 'react-native';

import { MangaProps } from './Manga.types';
import { story } from './Manga.types';

import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import StoryDetails from './StoryDetails/StoryDetails.tsx';

import { styleCreator } from './Manga.styles';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';

const Manga = (props: MangaProps) => {
  // const { story } = props;
  console.log(121111);

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <ScrollView style={styles.container}>
      <PageTitle title="Manga" />
      <StoryDetails {...story} />
    </ScrollView>
  );
};

export default Manga;
