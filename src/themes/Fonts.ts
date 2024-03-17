import { StyleSheet } from 'react-native';
import Variable from './Variable.ts';

const { Colors, FontWeight, FontSize, FontsFamily } = Variable;
export const Fonts = () =>
  StyleSheet.create({
    /** Font size */
    textSizeSmall: {
      fontSize: FontSize.small,
      lineHeight: 16,
    },
    textSizeMedium: {
      fontSize: FontSize.medium,
      lineHeight: 20,
    },
    textSizeLarge: {
      fontSize: FontSize.large,
      lineHeight: 24,
    },
    textSizeExtraLarge: {
      fontSize: FontSize.extraLarge,
      lineHeight: 28,
    },
    textSizeDoubleExtraLarge: {
      fontSize: FontSize.doubleExtraLarge,
      lineHeight: 30,
    },
    textSizeTripleExtraLarge: {
      fontSize: FontSize.tripleExtraLarge,
      lineHeight: 32,
    },
    /** Font weight */
    textRegular: {
      fontWeight: FontWeight.Regular,
      fontFamily: FontsFamily.Inter,
    },
    textSemiBold: {
      fontWeight: FontWeight.SemiBold,
      fontFamily: FontsFamily.Inter,
    },
    textMedium: {
      fontWeight: FontWeight.Medium,
      fontFamily: FontsFamily.Inter,
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    titleSmall: {
      fontSize: FontSize.medium * 1.5,
      fontWeight: FontWeight.Bold,
      color: Colors.fgColorGray700,
    },
    titleRegular: {
      fontSize: FontSize.large * 2,
      fontWeight: FontWeight.Bold,
      color: Colors.fgColorGray700,
    },
    titleLarge: {
      fontSize: FontSize.extraLarge * 2,
      fontWeight: FontWeight.Bold,
      color: Colors.fgColorGray700,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textError: {
      color: Colors.fgDanger,
    },
    textSuccess: {
      color: Colors.fgSuccess,
    },
    textPrimary: {
      color: Colors.fgWhite,
    },
    textLight: {
      color: Colors.bgFocus,
    },
  });
