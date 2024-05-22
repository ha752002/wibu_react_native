import * as React from 'react';
import { View } from 'react-native';

import { MangaProps } from './Manga.types';
import { story } from './Manga.types';

import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import StoryDetails from './StoryDetails/StoryDetails.tsx';

import { styleCreator } from './Manga.styles';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';

const Manga = (props: MangaProps) => {
  // const { story } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <View style={styles.container}>
      <PageTitle title="Manga" />
      <StoryDetails {...story} />
    </View>
  );
};

export default Manga;
