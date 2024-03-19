import { ReactNode } from 'react';

export type WibuTextSizeType = 'S' | 'M' | 'L' | 'XL';

export type WibuTextFieldProps = {
  value: string | undefined;
  placeholder: string | undefined;
  label: string | ReactNode;
  message: string | ReactNode;
  disabled?: boolean;
  Size?: WibuTextSizeType;
};
