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
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },

    introduce: {
      // padding : 12,
      // borderWidth: 1,
      // borderRadius: 8,
    },
  });
};
