import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      color: Colors.fgColorGray700,
      padding: 4,
    },

    genreList: {},

    item: {
      flex: 1,
      height: 40,
      borderColor: Colors.bgPrimary,
      borderRadius: 4,
    },
  });
};
