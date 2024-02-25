import {StyleSheet} from 'react-native';
import {StyleCreator} from '../../hooks/useThemeStyles.ts';
import {ButtonProps, IButtonAppearance} from './WibuButton.type.ts';

export const styleCreator: StyleCreator = (theme, props: ButtonProps) => {
  const {appearance, variant} = props;
  const {Colors} = theme;
  const buttonAppearance: IButtonAppearance = {
    filled: {
      primary: {
        backgroundColor: Colors.bgPrimary,
        color: Colors.fgWhite,
        underlayColor: Colors.bgPrimaryFocus,
        borderColor: Colors.bgPrimary,
      },
      danger: {
        backgroundColor: Colors.bgDangerSolidDefault,
        color: Colors.bgWhite,
        underlayColor: Colors.bgDangerSolidFocus,
        borderColor: Colors.bgDangerSolidDefault,
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
        backgroundColor: Colors.transparent,
        borderColor: Colors.bgPrimary,
        color: Colors.bgPrimary,
        underlayColor: Colors.bgPrimaryOutlineFocus,
      },
      warning: {
        backgroundColor: Colors.transparent,
        borderColor: Colors.borderOutlineDanger,
        color: Colors.fgDanger,
        underlayColor: Colors.bgDangerTonalFocus,
      },
    },
    text: {},
    tonal: {},
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
