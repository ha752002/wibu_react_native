import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      color: Colors.fgColorGray700,
    },

    thumbnail: {
      width: '100%',
      borderRadius: 12,
    },

    content: {
      paddingHorizontal: 36,
    },

    read: {
      marginTop: 24,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',

      // width: '100%'
    },

    img: {
      width: 180,
      height: 280,
      borderRadius: 12,
    },
  });
};
