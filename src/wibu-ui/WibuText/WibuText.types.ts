import { ReactNode } from 'react';
import { Colors, EFontsFamily, EFontsStyle } from '~/themes/Variable.ts';
import { ESize } from '~/enums/size.enums.ts';
import { EFontsWeight } from '~/enums/font.enum.ts';
import { TextStyle, ViewStyle } from 'react-native';

export type WibuTextSizeType =
  | ESize.S
  | ESize.M
  | ESize.L
  | ESize.XL
  | ESize.XXL
  | ESize.XXXL;

export type WibuTextProps = {
  children: string | ReactNode;
  fontFamily?: EFontsFamily;
  fontWeight?: EFontsWeight;
  fontSize?: WibuTextSizeType;
  fontStyle?: EFontsStyle;
  color?: keyof typeof Colors;
  textStyle?: TextStyle | TextStyle[];
  containerStyle?: ViewStyle | ViewStyle[];
  numberOfLines?: number;
};
