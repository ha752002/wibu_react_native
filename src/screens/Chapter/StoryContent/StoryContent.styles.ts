import { StyleCreator } from '~/hooks/useThemeStyles.ts';
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

    img: {
      width: '100%',
      height: 'auto',
      aspectRatio: 0.4,
      resizeMode: 'contain',
    },
  });
};
