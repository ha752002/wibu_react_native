import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      color: Colors.fgColorGray700,
      marginTop: 24,
      borderWidth: 1,
      borderRadius: 12,
      position: 'relative',
      overflow: 'hidden',
      // height: 290,
    },

    title: {
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: Colors.fgColorGray700,
    },

    filter: {
      borderRadius: 100,
    },

    chapters: {
      paddingHorizontal: 12,
      marginBottom: 28,
    },

    seeMoreButton: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      backgroundColor: Colors.bgFocus,
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },

    collapse: {
      height: 400,
    },

    extend: {
      height: 'auto',
    },
  });
};
