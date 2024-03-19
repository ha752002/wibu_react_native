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
      paddingVertical: 2,
      paddingHorizontal: 12,
      width: 150,
      height: 32,
      // textAlignVertical: 'center',
      // borderStyle: 'solid',
      borderRadius: 4,
      backgroundColor: Colors.bgWhite,
      marginTop: 8,
      color: 'black',
      // textAlignVertical: 'center' as 'center',
      ...buttonAppearance[Size ?? 'M'],
    },
    label: {
      color: Colors.fgTextColor,
    },
  });
};
