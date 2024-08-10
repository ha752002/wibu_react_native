import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryList.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      padding: 42,
      paddingVertical: 64,
      height: '100%',
    },

    content: {
      width: '100%',
      gap: 24,
      display: 'flex',
      flexDirection: 'column',
    },

    other: {
      display: 'flex',
      flexDirection: 'row',
    },

    button: {
      padding: 12,
      width: '100%',
      backgroundColor: '#2079FF',
      color: Colors.bgWhite,
      borderRadius: 100,
      position: 'absolute',
      bottom: 42,
    },
  });
};
