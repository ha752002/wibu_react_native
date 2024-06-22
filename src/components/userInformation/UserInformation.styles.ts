import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './userInformation.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      marginTop: 24,
    },

    userInformationGroup: {
      width: '100%',
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
