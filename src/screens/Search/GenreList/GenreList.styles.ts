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
      borderWidth: 0.5,
      borderColor: Colors.bgPrimary,
    },

    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      aspectRatio: 1,
      borderWidth: 0.5,
      borderColor: Colors.bgPrimary,
      // borderRadius: 4,
      // margin:3,
    },
  });
};
