import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      marginTop: 24,
      borderBottomWidth: 1,
    },

    genre: {
      margin: 12,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    genreItem: {
      marginRight: 6,
      marginTop: 6,
      backgroundColor: Colors.bgPrimary,
      padding: 4,
      // paddingVertical: 24,
      paddingHorizontal: 18,
      borderRadius: 100,
    },
  });
};
