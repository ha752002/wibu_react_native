import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      // paddingHorizontal: 36,
      color: Colors.fgColorGray700,
      marginTop: 24,
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },

    genre: {
      paddingHorizontal: 6,
      paddingVertical: 4,
      backgroundColor: Colors.bgPrimary,
      margin: 3,
      borderRadius: 4,
    },
  });
};