import { StyleCreator } from '../../hooks/useThemeStyles.ts';
import { WibuCheckBoxProps } from './WibuCheckBox.types.ts';
import { StyleSheet } from 'react-native';

export const styleCreator: StyleCreator = (theme, props: WibuCheckBoxProps) => {
  const { Colors } = theme;

  return StyleSheet.create({
    checkBoxStyle: {
      borderRadius: 4,
      backgroundColor: Colors.bgWhite,
      marginRight: 8,
    },

    label: {
      color: Colors.fgTextColor,
    },

    checkBoxContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: props.disabled ? 0.5 : 1,
    },

    check: {
      backgroundColor: Colors.fgPrimaryNeutralFocus,
      marginRight: 8,
      borderRadius: 4,
    },
  });
};
