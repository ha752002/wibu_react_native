import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './userInformation.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      marginTop: 24,
      zIndex: 2,
    },

    userInformationGroup: {
      // width: '100%',
      flex: 1,
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

    settings: {
      backgroundColor: Colors.bgWhite,
      borderRadius: 100,
      elevation: 5,
      marginRight: 12,
    },
  });
};
