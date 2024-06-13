import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './ItemStories.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    itemStoriesContainer: {
      width: 120,
      overflow: 'hidden',
    },

    largeContainer: {
      width: 140,
    },

    smallContainer: {
      width: 120,
    },

    groupItemStoriesStyle: {
      backgroundColor: Colors.bgWhite,
    },

    itemStoriesStyle: {},

    img: {
      width: '100%',
      height: 150,
      borderRadius: 10,
    },

    largeImg: {
      height: 170,
    },

    smallImg: {
      height: 170,
    },
  });
};
