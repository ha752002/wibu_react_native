import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { FontSize } = theme;

  return StyleSheet.create({
    storyListItemContainer: {
      // marginTop: 24,
    },

    storyListItemStyleGroup: {
      flexDirection: 'row',
    },

    storyListItemStyle: {
      marginRight: 24,
    },

    titleGroup: {
      width: '100%',
      paddingHorizontal: 10,
      fontSize: FontSize.large,
    },

    title: {
      flex: 1,
    },
  });
};
