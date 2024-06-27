import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      color: Colors.fgColorGray700,
    },

    modalItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },

    selected: {
      backgroundColor: '#ddd',
    },

    modalItemText: {
      fontSize: 16,
    },

    selectedContent: {
      fontWeight: 'bold',
    },
  });
};
