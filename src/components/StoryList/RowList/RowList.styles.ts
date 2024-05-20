import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { FontSize } = theme;

  return StyleSheet.create({
    storyListItemContainer: {
      marginTop: 24,
    },

    storyListItemStyleGroup: {
      flexDirection: 'row',
    },

    storyListItemStyle: {},

    titleGroup: {
      width: 320,
      paddingHorizontal: 10,
      fontSize: FontSize.large,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    title: {
      flex: 1,
    },
  });
};
