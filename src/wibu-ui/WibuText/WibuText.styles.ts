import { StyleSheet, TextStyle } from 'react-native';
import { StyleCreator } from '../../hooks/useThemeStyles.ts';
import { ESize } from '../../enums/wibiSize.enums.ts';
import { WibuTextProps, WibuTextSizeType } from './WibuText.types.ts';

export const styleCreator: StyleCreator = (theme, props: WibuTextProps) => {
  const { Fonts, FontsFamily, Colors, FontWeight, FontStyle } = theme;
  const { fontSize, fontWeight, fontStyle, color } = props;

  const fontSizeStyle: Record<WibuTextSizeType, TextStyle> = {
    [ESize.S]: Fonts.textSizeSmall,
    [ESize.M]: Fonts.textSizeMedium,
    [ESize.L]: Fonts.textSizeLarge,
    [ESize.XL]: Fonts.textSizeExtraLarge,
    [ESize.XXL]: Fonts.textSizeDoubleExtraLarge,
    [ESize.XXXL]: Fonts.textSizeTripleExtraLarge,
  };

  return StyleSheet.create({
    textStyle: {
      fontStyle: fontStyle ?? FontStyle.Normal,
      fontWeight: fontWeight ?? FontWeight.Medium,
      color: Colors[color ?? 'fgTextColor'],
      textAlign: 'center',
      fontFamily: FontsFamily.Inter,
      ...fontSizeStyle[fontSize ?? ESize.M],
    },
  });
};
