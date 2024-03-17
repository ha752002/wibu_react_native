import { Theme as ReactNavigationTheme } from '@react-navigation/native/src/types';
import Variables from '../src/themes/Variable.ts';
import { Fonts } from '../src/themes/Fonts.ts';
import { Images } from '../src/themes/Images.ts';
import { Layout } from '../src/themes/Layout.ts';

type NavigationColors<T> = T extends { colors: infer U } ? U : never;
type ThemeNavigationColors = NavigationColors<ReactNavigationTheme>;

export type ThemeVariables = {
  readonly Colors: Readonly<typeof Variables.Colors>;
  readonly NavigationColors: Readonly<typeof Variables.NavigationColors>;
  readonly FontSize: Readonly<typeof Variables.FontSize>;
  readonly FontWeight: Readonly<typeof Variables.FontWeight>;
  readonly MetricsSizes: Readonly<typeof Variables.MetricsSizes>;
  readonly FontsFamily: Readonly<typeof Variables.FontsFamily>;
  readonly FontStyle: Readonly<typeof Variables.FontStyle>;
};

type Theme = ThemeVariables & {
  Fonts: ReturnType<typeof Fonts>;
  Images: ReturnType<typeof Images>;
  Layout: ReturnType<typeof Layout>;
};
