import {StyleSheet} from 'react-native';
import {StyleCreator} from '../../hooks/useThemeStyles.ts';
import {ITextProps, WibuTextStyleType} from './WibuText.types.ts';
import {ESize} from '../../enums/size.enum.ts';

export const styleCreator: StyleCreator = (theme, props: ITextProps) => {
  const {Colors, Fonts} = theme;
  const {size, style} = props;
  const textStyle: WibuTextStyleType = {
    [ESize.S]: Fonts.textSizeSmall,
    [ESize.M]: Fonts.textSizeMedium,
    [ESize.L]: Fonts.textSizeLarge,
    [ESize.XL]: Fonts.textSizeExtraLarge,
    [ESize.XXL]: Fonts.textSizeDoubleExtraLarge,
    [ESize.XXXL]: Fonts.textSizeTripleExtraLarge,
  };

  return StyleSheet.create({
    textStyle: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      color: Colors.bgPrimary,
      textAlign: 'center',
      ...textStyle[size ?? ESize.S],
      ...style,
    },
    textContainer: {
      alignItems: 'flex-start',
    },
  });
};
