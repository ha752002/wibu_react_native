import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './ItemStories.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    storyContainer: {
      width: 320,
      flexDirection: 'row',
      padding: 16,
      elevation: 5,
      borderRadius: 20,
      backgroundColor: Colors.bgWhite,
    },

    groupItemStoriesStyle: {
      backgroundColor: Colors.bgWhite,
    },

    storyInformation: {
      marginLeft: 12,
      flex: 1,
    },

    basicInformation: {
      flex: 1,
    },

    // otherInformation: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    // },

    img: {
      width: 60,
      height: 90,
      borderRadius: 10,
    },
  });
};
