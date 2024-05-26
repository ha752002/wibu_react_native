import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './ItemStories.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    titleContainer: {
      backgroundColor: Colors.transparent,
    },

    title: {
      flex: 1,
      alignItems: 'center',
    },
  });
};
