import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface WibuViewTypes extends ViewStyle {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}
