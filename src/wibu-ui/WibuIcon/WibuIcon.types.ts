import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import { ColorValue, TextStyle, ViewStyle } from 'react-native';

export interface IWibuIconProps {
  name: EIconName;
  size: ESize;
  iconStyle?: TextStyle;
  containerStyle?: ViewStyle;
  color?: ColorValue;
  backgroundColor?: ColorValue;
}

export const iconSize: Record<ESize, number> = {
  [ESize.S]: 16,
  [ESize.M]: 20,
  [ESize.L]: 24,
  [ESize.XL]: 32,
  [ESize.XXL]: 48,
  [ESize.XXXL]: 64,
};
