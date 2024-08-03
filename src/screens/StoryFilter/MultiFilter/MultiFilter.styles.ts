import { StyleCreator } from '~/hooks/useThemeStyles.ts';
// import {  } from './StoryListItem.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    container: {
      color: Colors.fgColorGray700,
    },

    picker: {
      borderWidth: 1,
      borderColor: Colors.bgPrimary,
      borderRadius: 100,
      paddingHorizontal: 18,
      marginTop: 6,
      flexDirection: 'row',
      padding: 4,
    },

    pickerText: {
      fontSize: 16,
    },

    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalContent: {
      width: '80%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      height: 600,
    },

    closeButton: {
      padding: 10,
      marginTop: 20,
      backgroundColor: '#2196F3',
      borderRadius: 5,
      alignItems: 'center',
    },

    closeButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
};
