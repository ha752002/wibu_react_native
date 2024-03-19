import { StyleCreator } from '../../hooks/useThemeStyles.ts';
import { WibuTextFieldProps } from './WibuTextField.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = (
  theme,
  props: WibuTextFieldProps,
) => {
  const { Colors } = theme;

  return StyleSheet.create({
    textFieldStyle: {
      paddingVertical: 4,
      paddingHorizontal: 12,
      width: 150,
      height: 36,
      // borderStyle: 'solid',
      borderRadius: 4,
      backgroundColor: Colors.bgWhite,
      marginTop: 8,
      color: 'black',
    },
    label: {
      color: Colors.fgTextColor,
    },

    textFieldContainer: {
      opacity: props.disabled ? 0.5 : 1,
    },
  });
};
