import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryList.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    Container: {
      marginTop: 16,
      // padding: 20,
      paddingHorizontal: 42,
      paddingVertical: 4,
      position: 'absolute',
      top: -5,
      right: -28,
      transform: [{ rotate: '45deg' }],
    },

    full: {
      backgroundColor: Colors.fgSuccess,
    },

    new: {
      backgroundColor: Colors.fgInProgress,
    },

    hot: {
      backgroundColor: Colors.bgPrimary,
    },
  });
};
