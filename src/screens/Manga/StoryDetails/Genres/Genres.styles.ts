import { StyleCreator } from '~/hooks/useThemeStyles.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      color: Colors.fgColorGray700,
      marginTop: 24,
      flexWrap: 'wrap',
    },

    genre: {
      paddingHorizontal: 6,
      paddingVertical: 4,
      backgroundColor: Colors.bgPrimary,
      margin: 3,
      borderRadius: 4,
    },
  });
};
