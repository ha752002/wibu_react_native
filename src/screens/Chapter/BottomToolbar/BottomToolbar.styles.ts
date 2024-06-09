import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 64,
      backgroundColor: Colors.bgWhite,
      borderTopWidth: 0.4,
      borderTopColor: Colors.fgColorGray700,
    },
    content: {
      flex: 1,
    },
  });
};
