import { ReactNode } from 'react';

export type WibuCheckBoxProps = {
  checked?: boolean;
  disabled?: boolean;
  label: string | ReactNode;
  numberOfLines?: number;
};
