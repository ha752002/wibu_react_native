import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './userInformation.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      marginTop: 24,
      marginRight: 12,
      position: 'absolute',
      backgroundColor: Colors.bgWhite,
      elevation: 5,
      borderRadius: 6,
      right: 0,
      top: 28,
      zIndex: 999,
    },

    itemSettings: {
      paddingRight: 24,
      paddingLeft: 12,
      // paddingHorizontal: 24,
      paddingVertical: 6,
    },
  });
};
