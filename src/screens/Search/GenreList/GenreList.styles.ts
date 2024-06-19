import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      color: Colors.fgColorGray700,
      // height: 400,

      padding: 4,
    },

    genreList: {
      // borderWidth: 0.5,
      // borderColor: Colors.bgPrimary,
      // flexDirection:
    },

    item: {
      flex: 1,
      height: 40,
      // borderWidth: 0.5,
      borderColor: Colors.bgPrimary,
      // aspectRatio: 1,
      borderRadius: 4,
      // margin:3,
    },
  });
};
