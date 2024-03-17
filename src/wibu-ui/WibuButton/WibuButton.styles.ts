import { StyleSheet } from 'react-native';
import { StyleCreator } from '../../hooks/useThemeStyles.ts';
import { ButtonProps, IButtonAppearance } from './WibuButton.types.ts';

export const styleCreator: StyleCreator = (theme, props: ButtonProps) => {
  const { appearance, variant } = props;
  const { Colors } = theme;
  const buttonAppearance: IButtonAppearance = {
    filled: {
      primary: {
        backgroundColor: Colors.fgPrimaryNeutral,
        color: Colors.fgWhite,
        underlayColor: Colors.fgPrimaryNeutralFocus,
        borderColor: Colors.fgPrimaryNeutral,
      },
      warning: {
        backgroundColor: Colors.bgDangerSolidDefault,
        color: Colors.bgWhite,
        underlayColor: Colors.bgDangerSolidFocus,
        borderColor: Colors.bgDangerSolidDefault,
      },
    },
    outline: {
      primary: {
        backgroundColor: Colors.fgPrimaryNeutralFocus,
        borderColor: Colors.fgPrimaryNeutralFocus,
        color: Colors.bgPrimary,
        underlayColor: Colors.fgPrimaryNeutral,
      },
      warning: {
        backgroundColor: Colors.transparent,
        borderColor: Colors.borderOutlineDanger,
        color: Colors.fgDanger,
        underlayColor: Colors.bgDangerTonalFocus,
      },
    },
    text: {
      primary: {
        backgroundColor: Colors.transparent,
        borderColor: Colors.transparent,
        color: Colors.fgPrimaryNeutralFocus,
        underlayColor: Colors.fgPrimaryNeutral,
      },
      warning: {
        backgroundColor: Colors.transparent,
        borderColor: Colors.transparent,
        color: Colors.fgDanger,
        underlayColor: Colors.bgDangerTonalFocus,
      },
    },
    tonal: {
      primary: {
        backgroundColor: Colors.fgPrimaryNeutral,
        borderColor: Colors.transparent,
        color: Colors.fgPrimaryNeutralFocus,
        underlayColor: Colors.bgPrimaryTonalFocus,
      },
      warning: {
        backgroundColor: Colors.bgDangerTonalDefault,
        borderColor: Colors.transparent,
        color: Colors.fgDanger,
        underlayColor: Colors.bgDangerTonalFocus,
      },
    },
  };

  const buttonStyle = buttonAppearance[appearance][variant];
  return StyleSheet.create({
    buttonStyle: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      flexGrow: 0,
      color: Colors.bgPrimary,
      ...buttonStyle,
    },
    buttonContainer: {
      alignItems: 'flex-start',
    },
    text: {
      color: buttonStyle?.color ?? Colors.bgPrimary,
    },
  });
};
