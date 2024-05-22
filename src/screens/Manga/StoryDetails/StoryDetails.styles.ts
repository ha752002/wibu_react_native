import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      // paddingHorizontal: 36,
      color: Colors.fgColorGray700,
      marginTop: 24,
    },

    thumbnail: {
      width: '100%',
      // height: '100%',
      // justifyContent:'center'
      alignItems: 'center',
    },

    img: {
      width: 180,
      height: 280,
    },
  });
};
