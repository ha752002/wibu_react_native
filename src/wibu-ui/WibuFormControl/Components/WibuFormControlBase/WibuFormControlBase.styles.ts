import { StyleCreator } from '~/hooks/useThemeStyles.ts';
import { StyleSheet } from 'react-native';

const styleCreator: StyleCreator = theme => {
  const { Layout } = theme;

  return StyleSheet.create({
    containerStyle: {
      ...Layout.dFlex,
      ...Layout.row,
      gap: 4,
    },
  });
};

export default styleCreator;
