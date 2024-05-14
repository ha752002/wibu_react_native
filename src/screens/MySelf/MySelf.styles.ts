import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  // const { Colors, FontSize } = theme;

  return StyleSheet.create({
    container: {
      paddingHorizontal: 36,
    },
  });
};
