import { ReactNode } from 'react';

interface ITextFieldStyle {
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  paddingVertical?: number;
  width?: number;
  height?: number;
}

export type WibuTextFieldSizeType = 'S' | 'M' | 'L' | 'XL';

export type WibuTextFieldProps = {
  value: string | undefined;
  placeholder: string | undefined;
  label: string | ReactNode;
  message: string | ReactNode;
  disabled?: boolean;
  Notification?: boolean;
  Size?: WibuTextFieldSizeType;
};

export interface ITextFieldSize
  extends Record<WibuTextFieldSizeType, ITextFieldStyle> {}
