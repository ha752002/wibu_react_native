import { StyleCreator } from '../../hooks/useThemeStyles.ts';
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
      alignItems: 'center',
      width: 320,
      flexDirection: 'row',
    },

    userInformationStyle: {
      width: 60,
      height: 60,
      borderRadius: 100,
    },

    user: {
      marginLeft: 24,
      color: Colors.fgColorGray700,
    },
  });
};
