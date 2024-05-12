import { StyleCreator } from '~/hooks/useThemeStyles.ts';
import { StyleSheet } from 'react-native';

const styleCreator: StyleCreator = theme => {
  const { Colors, Fonts } = theme;

  return StyleSheet.create({
    childrenStyles: {
      ...Fonts.textSizeSmall,
      color: Colors.fgDanger,
      flexShrink: 1,
    },
  });
};

export default styleCreator;
