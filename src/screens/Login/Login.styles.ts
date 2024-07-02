import { StyleCreator } from '~/hooks/useThemeStyles.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Layout } = theme;

  return StyleSheet.create({
    containerWrapper: {
      ...Layout.dFlex,
      ...Layout.colCenter,
      ...Layout.fullSize,
      backgroundColor: 'black',
    },
  });
};
