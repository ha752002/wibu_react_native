import { StyleCreator } from '../../hooks/useThemeStyles.ts';
// import {  } from './ItemStories.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = theme => {
  const { Colors } = theme;

  return StyleSheet.create({
    storyContainer: {
      // width: 320,
      flexDirection: 'row',
      overflow: 'hidden',
    },

    shadow: {
      backgroundColor: Colors.bgWhite,
      elevation: 5,
      padding: 16,
      borderRadius: 20,
    },

    ratings: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 16,
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

    img: {
      width: 60,
      height: 90,
      borderRadius: 10,
    },
  });
};
