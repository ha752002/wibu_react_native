import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './StoryList.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { FontSize } = theme;

  return StyleSheet.create({
    storyListContainer: {
      marginTop: 24,
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    storyListStyleGroup: {
      flexDirection: 'row',
      // gap: 20,
      // marginVertical: 20,
      // width: 320,
      // paddingVertical: 20,
    },

    storyListStyle: {},

    titleGroup: {
      flexDirection: 'row',
      width: 320,
      justifyContent: 'space-between',
      alignItems: 'center',
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
