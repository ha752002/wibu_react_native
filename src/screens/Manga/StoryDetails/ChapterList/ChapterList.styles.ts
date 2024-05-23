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
      // height: 290,
    },

    title: {
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: Colors.fgColorGray700,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    chapters: {
      paddingHorizontal: 12,
    },

    chapter: {
      paddingHorizontal: 8,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: Colors.fgColorGray700,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
  });
};
