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
      success: {
        backgroundColor: Colors.bgSuccess,
        color: Colors.bgWhite,
        underlayColor: Colors.bgSuccessFocus,
        borderColor: Colors.bgSuccessOutlineFocus,
      },
      warning: {
        backgroundColor: Colors.bgWarning,
        color: Colors.bgWhite,
        underlayColor: Colors.bgWarningFocus,
        borderColor: Colors.bgWarningOutlineFocus,
      },
      danger: {
        backgroundColor: Colors.bgDanger,
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
        underlayColor: Colors.bgPrimaryTonalDefault,
      },
      success: {
        backgroundColor: Colors.transparent,
        borderColor: Colors.borderOutlineDanger,
        color: Colors.bgSuccess,
        underlayColor: Colors.bgSuccessTonalDefault,
      },
      warning: {
        backgroundColor: Colors.transparent,
        borderColor: Colors.borderOutlineDanger,
        color: Colors.bgWarning,
        underlayColor: Colors.bgWarningTonalDefault,
      },
      danger: {
        backgroundColor: Colors.transparent,
        borderColor: Colors.borderOutlineDanger,
        color: Colors.fgDanger,
        underlayColor: Colors.bgDangerTonalDefault,
      },
    },
    text: {
      primary: {
        color: Colors.bgPrimary,
        underlayColor: Colors.bgPrimaryTonalDefault,
      },
      success: {
        color: Colors.bgSuccess,
        underlayColor: Colors.bgSuccessTonalDefault,
      },
      warning: {
        color: Colors.bgWarning,
        underlayColor: Colors.bgWarningTonalDefault,
      },
      danger: {
        color: Colors.bgDanger,
        underlayColor: Colors.bgDangerTonalDefault,
      },
    },
    tonal: {
      primary: {
        backgroundColor: Colors.bgPrimaryTonalDefault,
        color: Colors.bgPrimary,
        underlayColor: Colors.bgPrimaryFocus,
      },
      success: {
        backgroundColor: Colors.bgSuccessTonalDefault,
        color: Colors.bgSuccess,
        underlayColor: Colors.bgSuccessFocus,
      },
      warning: {
        backgroundColor: Colors.bgWarningTonalDefault,
        color: Colors.bgWarning,
        underlayColor: Colors.bgWarningFocus,
      },
      danger: {
        backgroundColor: Colors.bgDangerTonalDefault,
        color: Colors.bgDanger,
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
