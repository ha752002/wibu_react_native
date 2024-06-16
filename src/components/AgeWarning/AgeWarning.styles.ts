import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryList.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    Container: {
      marginTop: 16,
    },

    WarningContent: {
      borderWidth: 1,
      borderColor: Colors.bgDangerSolidDefault,
      padding: 12,
      borderRadius: 4,
    },
  });
};
