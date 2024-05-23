import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      // paddingHorizontal: 36,
      color: Colors.fgColorGray700,
    },

    thumbnail: {
      width: '100%',
      alignItems: 'center',
      borderRadius: 14,
    },

    img: {
      width: '100%',
      height: 240,
      borderRadius: 12,
    },
  });
};
