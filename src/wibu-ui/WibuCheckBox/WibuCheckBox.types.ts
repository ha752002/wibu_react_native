import { ReactNode } from 'react';

export type WibuCheckBoxType = [];

export type WibuCheckBoxProps = {
  checked?: boolean;
  disabled?: boolean;
  label: string | ReactNode;
  numberOfLines?: number;
};
