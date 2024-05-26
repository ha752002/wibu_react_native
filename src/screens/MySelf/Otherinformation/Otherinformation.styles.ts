import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './userInformation.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      marginTop: 24,
    },

    userInformationGroup: {
      marginTop: 24,
      width: 320,
      borderTopWidth: 1,
      borderTopColor: Colors.fgTextColor,
      padding: 12,
      justifyContent: 'space-evenly',
    },

    // userInformationStyle: {
    //   alignItems: 'center',
    // },

    user: {
      marginLeft: 24,
    },
  });
};
