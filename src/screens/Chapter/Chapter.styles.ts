import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      color: Colors.fgColorGray700,
    },
    content: {
      flex: 1,
    },
  });
};
