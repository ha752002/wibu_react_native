import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { FontSize } = theme;

  return StyleSheet.create({
    storyListItemContainer: {
      marginTop: 24,
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    storyListItemStyleGroup: {
      flexDirection: 'row',
      // gap: 20,
      // marginVertical: 20,
      // width: 320,
      // paddingVertical: 20,
    },

    storyListItemStyle: {},

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
  });
};
