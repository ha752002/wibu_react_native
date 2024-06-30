import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './SearchForm.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors, FontSize } = theme;

  return StyleSheet.create({
    searchFormContainer: {
      marginTop: 24,
      marginHorizontal: 4,
    },

    groupSearchFormStyle: {
      width: '100%',
      height: 45,
      paddingHorizontal: 12,
      backgroundColor: Colors.bgWhite,
      borderRadius: 25,
      elevation: 5,
    },

    searchFormStyle: {
      flex: 1,
      backgroundColor: Colors.transparent,
      fontSize: FontSize.large,
      color: 'black',
    },

    advanced: {
      borderRadius: 100,
    },
  });
};
