import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryList.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      // marginTop: 24,
    },

    groupInput: {
      backgroundColor: Colors.bgWhite,
      paddingHorizontal: 24,
      borderRadius: 100,
    },

    input: {
      display: 'flex',
      flex: 1,
    },
  });
};
