import { StyleCreator } from '~/hooks/useThemeStyles.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      marginTop: 12,
      color: Colors.fgColorGray700,
      flexDirection: 'row',
      // paddingHorizontal: 36,
    },

    Keyword: {
      paddingHorizontal: 18,
      // paddingVertical: 6,
      // backgroundColor: Colors.fgActive,
      borderWidth: 1,
      borderColor: Colors.fgColorGray700,
      marginRight: 6,
      borderRadius: 6,
    },

    selected: {
      backgroundColor: Colors.bgPrimary,
      borderColor: Colors.bgPrimary,
    },
  });
};
