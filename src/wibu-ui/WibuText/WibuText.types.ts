import {ReactNode} from 'react';
import {
  Colors,
  EFontsFamily,
  EFontsStyle,
  EFontsWeight,
} from '@/themes/Variable.ts';
import {ESize} from '../Helper/WibuSize.enums.ts';
import {TextProps} from 'react-native';

export type WibuTextSize =
  | ESize.S
  | ESize.M
  | ESize.L
  | ESize.XL
  | ESize.XXL
  | ESize.XXXL;

export interface WibuTextProps extends TextProps {
  children?: ReactNode;
  fontFamily?: EFontsFamily;
  fontWeight?: EFontsWeight;
  fontSize?: WibuTextSize;
  fontStyle?: EFontsStyle;
  color?: keyof typeof Colors;
}
