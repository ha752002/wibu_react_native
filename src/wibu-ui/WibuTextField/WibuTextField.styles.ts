import { StyleCreator } from '../../hooks/useThemeStyles.ts';
import { ITextFieldSize, WibuTextFieldProps } from './WibuTextField.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = (
  theme,
  props: WibuTextFieldProps,
) => {
  const { Colors, FontSize } = theme;
  const { Size } = props;
  const buttonAppearance: ITextFieldSize = {
    S: {
      fontSize: FontSize.small,
      paddingVertical: 2,
      height: 32,
    },
    M: {
      fontSize: FontSize.medium,
      paddingVertical: 3,
      height: 36,
    },
    L: {
      fontSize: FontSize.large,
      paddingVertical: 4,
      height: 40,
    },
    XL: {
      fontSize: FontSize.extraLarge,
      paddingVertical: 6,
      height: 44,
    },
  };

  return StyleSheet.create({
    textFieldContainer: {
      opacity: props.disabled ? 0.5 : 1,
      // borderStyle: 'solid',
    },
    textFieldStyle: {
      paddingHorizontal: 12,
      width: 150,
      // textAlignVertical: 'center',
      // borderStyle: 'solid',
      borderRadius: 4,
      backgroundColor: Colors.bgWhite,
      fontSize: FontSize.small,
      marginTop: 8,
      color: 'black',
      // textAlignVertical: 'center' as 'center',
      ...buttonAppearance[Size ?? 'M'],
    },
    label: {
      color: Colors.fgTextColor,
    },
    message: {
      color: Colors.fgDanger,
      marginTop: 4,
    },
  });
};
