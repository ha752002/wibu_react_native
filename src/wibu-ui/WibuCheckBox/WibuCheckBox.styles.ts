import { StyleCreator } from '../../hooks/useThemeStyles.ts';
import { WibuCheckBoxProps } from './WibuCheckBox.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = (theme, props: WibuCheckBoxProps) => {
  const { Colors } = theme;

  return StyleSheet.create({
    checkBoxStyle: {
      paddingVertical: 2,
      paddingHorizontal: 2,
      // borderStyle: 'solid',
      borderRadius: 4,
      backgroundColor:
        props.checked === 'selected' || props.checked === 'unselected'
          ? Colors.fgPrimaryNeutralFocus
          : Colors.bgWhite,
      marginRight: 8,
      aspectRatio: 1,
      textAlign: 'center',
      color: Colors.bgWhite,
    },
    label: {
      color:
        props.checked === 'selected' || props.checked === 'unselected'
          ? Colors.bgPrimary
          : Colors.fgTextColor,
    },

    checkBoxContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      opacity: props.disabled ? 0.5 : 1,
    },
  });
};
