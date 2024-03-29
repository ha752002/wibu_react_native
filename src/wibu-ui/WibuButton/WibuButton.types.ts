import { ReactNode } from 'react';
import { TextStyle } from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  children: string | ReactNode;
  appearance: ButtonAppearanceType;
  variant: ButtonVariantType;
  textStyle?: TextStyle | TextStyle[];
};

interface IButtonStyle {
  backgroundColor?: string;
  color?: string;
  underlayColor?: string;
  borderColor?: string;
}

export type ButtonAppearanceType = 'filled' | 'outline' | 'text' | 'tonal';
export type ButtonVariantType = 'success' | 'primary' | 'danger' | 'warning';

export interface IButtonPalette
  extends Record<ButtonVariantType, IButtonStyle> {}

export interface IButtonAppearance
  extends Record<ButtonAppearanceType, Partial<IButtonPalette>> {}
