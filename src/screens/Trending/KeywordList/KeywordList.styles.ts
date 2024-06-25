import { StyleCreator } from '~/hooks/useThemeStyles.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      marginTop: 24,
      color: Colors.fgColorGray700,
      flexDirection: 'row',
      padding: 4,
    },

    Keyword: {
      paddingHorizontal: 18,
      elevation: 5,
      backgroundColor: Colors.bgWhite,
      borderColor: Colors.fgColorGray700,
      marginRight: 6,
      borderRadius: 100,
    },

    selected: {
      backgroundColor: Colors.bgPrimary,
      borderColor: Colors.bgPrimary,
    },
  });
};
