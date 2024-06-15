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
      borderRadius: 24,
    },

    img: {
      width: '100%',
      height: 240,
      borderRadius: 24,
    },

    groupIcon: {
      top: 10,
      right: 10,
      position: 'absolute',
      flexDirection: 'row',
    },

    // icon: {
    //   padding: 4,
    //   borderRadius: 100,
    //   marginRight: 6,
    //   aspectRatio: 1,
    //   width: 42,
    // },

    // default: {
    //   borderWidth: 2,
    //   borderColor: Colors.bgPrimary,
    // },

    // followed: {
    //   backgroundColor: Colors.bgPrimary,
    // },
  });
};
