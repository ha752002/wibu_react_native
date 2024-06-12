import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      paddingHorizontal: 36,
      color: Colors.fgColorGray700,
      overflow: 'scroll',
      height: '100%',
    },
  });
};
