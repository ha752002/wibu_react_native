import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      // paddingHorizontal: 36,
      color: Colors.fgColorGray700,
      // marginTop: 24,
    },

    thumbnail: {
      width: '100%',
      alignItems: 'center',
      borderRadius: 12,
    },

    content: {
      paddingHorizontal: 36,
    },

    img: {
      width: 180,
      height: 280,
      borderRadius: 12,
    },
  });
};