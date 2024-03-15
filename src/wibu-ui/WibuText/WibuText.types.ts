import {TextProps, TextStyle} from 'react-native';
import {ReactNode} from 'react';
import {ESize} from '../../enums/size.enum.ts';

export interface ITextProps extends TextProps {
  onPress: () => void;
  children: string | ReactNode;
  style: TextStyle | TextStyle[];
}

export type WibuTextSize =
  | ESize.S
  | ESize.M
  | ESize.L
  | ESize.XL
  | ESize.XXL
  | ESize.XXXL;

export type WibuTextSizeType = Record<WibuTextSize, TextStyle>;
