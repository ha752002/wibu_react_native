import { StyleCreator } from '~/hooks/useThemeStyles.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      color: Colors.fgColorGray700,
      marginTop: -160,
      borderRadius: 8,
    },

    thumbnail: {
      flex: 1,
      borderRadius: 16,
      overflow: 'hidden',
    },

    img: {
      width: 'auto',
      height: 240,
      resizeMode: 'contain',
      borderRadius: 16,
    },

    information: {
      alignItems: 'center',
    },
  });
};
