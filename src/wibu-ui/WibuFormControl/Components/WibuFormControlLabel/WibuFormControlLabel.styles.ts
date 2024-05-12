import { StyleCreator } from '~/hooks/useThemeStyles.ts';
import { StyleSheet } from 'react-native';

const styleCreator: StyleCreator = theme => {
  const { FontWeight, FontSize, Colors } = theme;

  return StyleSheet.create({
    childrenStyles: {
      fontSize: FontSize.small,
      fontWeight: FontWeight.Regular,
      color: Colors.fgTextColor,
    },
  });
};

export default styleCreator;
