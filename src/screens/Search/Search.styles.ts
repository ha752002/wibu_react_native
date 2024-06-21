import { StyleCreator } from '../../hooks/useThemeStyles.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      color: Colors.fgColorGray700,
      paddingHorizontal: 36,
    },
  });
};
