import { Theme as ReactNavigationTheme } from '@react-navigation/native/src/types';
import { Fonts } from '~/themes/Fonts.ts';
import { Images } from '~/themes/Images.ts';
import { Layout } from '~/themes/Layout.ts';
import Variable from '~/themes/Variable.ts';

type NavigationColors<T> = T extends { colors: infer U } ? U : never;
type ThemeNavigationColors = NavigationColors<ReactNavigationTheme>;

export type ThemeVariables = {
  readonly Colors: Readonly<typeof Variable.Colors>;
  readonly NavigationColors: Readonly<typeof Variable.NavigationColors>;
  readonly FontSize: Readonly<typeof Variable.FontSize>;
  readonly FontWeight: Readonly<typeof Variable.FontWeight>;
  readonly MetricsSizes: Readonly<typeof Variable.MetricsSizes>;
  readonly FontsFamily: Readonly<typeof Variable.FontsFamily>;
  readonly FontStyle: Readonly<typeof Variable.FontStyle>;
};

type Theme = ThemeVariables & {
  Fonts: ReturnType<typeof Fonts>;
  Images: ReturnType<typeof Images>;
  Layout: ReturnType<typeof Layout>;
};
