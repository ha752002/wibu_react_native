import { StyleCreator } from '../../../hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      marginTop: 16,
      color: Colors.fgColorGray700,
      marginRight: 20,
      flex: 1,
    },
    picker: {
      justifyContent: 'center',
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      backgroundColor: Colors.bgWhite,
      flex: 1,
    },

    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalContent: {
      width: '80%',
      backgroundColor: '#fff',
      borderRadius: 12,
      height: 600,
      overflow: 'hidden',
    },

    modalItem: {
      paddingVertical: 12,
      paddingHorizontal: 24,
    },

    modalItemText: {
      fontSize: 16,
    },

    selected: {
      backgroundColor: Colors.bgPrimary,
    },

    selectedContent: {
      color: Colors.bgWhite,
    },
  });
};
