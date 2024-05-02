import { StyleSheet } from 'react-native';
import { StyleCreator } from '~/hooks/useThemeStyles.ts';

export const styleCreator: StyleCreator = theme => {
  const { MetricsSizes } = theme;
  return StyleSheet.create({
    container: {},
    iconStyle: {
      padding: MetricsSizes.tiny,
    },
  });
};
