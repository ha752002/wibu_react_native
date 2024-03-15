import {StyleSheet} from 'react-native';
import {StyleCreator} from '../../hooks/useThemeStyles.ts';
import {ITextProps, WibuTextSizeType} from './WibuText.types.ts';
import {ESize} from '../../enums/size.enum.ts';

export const styleCreator: StyleCreator = (theme, props: ITextProps) => {
  const {Colors} = theme;
  const textStyle: WibuTextSizeType = {
    [ESize.S]: {},
    [ESize.M]: {},
    [ESize.L]: {},
    [ESize.XL]: {},
    [ESize.XXL]: {},
    [ESize.XXXL]: {},
  };

  return StyleSheet.create({
    textStyle: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      color: Colors.bgPrimary,
      textAlign: 'center',
      ...textStyle,
    },
    textContainer: {
      alignItems: 'flex-start',
    },
  });
};
