import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryList.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    storyListContainer: {
      // marginTop: 24,
    },

    emptyList: {
      alignItems: 'center',
      width: '100%',
      padding: 20,
      borderWidth: 1,
      borderRadius: 15,
      marginTop: 15,
      borderColor: Colors.bgFocus,
    },
  });
};
