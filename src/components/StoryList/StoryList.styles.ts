import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './StoryList.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    storyListContainer: {
      // marginTop: 12,
      marginBottom: 12,
      color: Colors.fgColorGray700,
    },
  });
};
