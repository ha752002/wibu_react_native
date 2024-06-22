import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryList.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { FontSize } = theme;

  return StyleSheet.create({
    storyListContainer: {
      // marginTop: 24,
    },

    titleGroup: {
      flex: 1,
      paddingHorizontal: 10,
      fontSize: FontSize.large,
    },

    title: {
      flex: 1,
    },

    item: {
      margin: 12,
    },
  });
};
