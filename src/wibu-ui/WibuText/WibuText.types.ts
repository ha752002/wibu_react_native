import {ReactNode} from 'react';
import {Colors, EFontsFamily, EFontsStyle} from '../../themes/Variable.ts';
import {ESize} from '../../enums/wibiSize.enums.ts';
import {EFontsWeight} from '../../enums/font.enum.ts';

export type WibuSizeType =
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
  fontSize?: WibuSizeType;
  fontStyle?: EFontsStyle;
  color?: keyof typeof Colors;
};
