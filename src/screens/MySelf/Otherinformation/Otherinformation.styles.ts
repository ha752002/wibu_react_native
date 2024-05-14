import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './userInformation.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    userInformationContainer: {
      marginTop: 24,
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    userInformationStyleGroup: {
      marginTop: 24,
      alignItems: 'center',
      width: 320,
      flexDirection: 'row',
      borderTopWidth: 1,
      borderTopColor: Colors.fgTextColor,
      padding: 12,
      justifyContent: 'space-evenly',
    },

    userInformationStyle: {
      // width: 60 ,
      // height:60,
      // borderRadius: 100,
      alignItems: 'center',
    },

    user: {
      marginLeft: 24,
    },
  });
};
