import {ThemeNavigationColors} from '../../@types/theme';
import {EFontsSize} from '../enums/font.enum.ts';

const BaseColors = {
  white: '#FFFFFF',

  pink0: '#ffc0c4',
  pink01: '#FC7A82',
  pink100: '#FF737D',
  pink200: '#fc6069',
  pink300: '#FF5963',
  pink400: '#FF414B',
  pink500: '#FF3540',
  pink600: '#FF2934',

  gray50: '#F2F5F7',
  gray100: '#E7EAED',
  gray150: '#E6E6E6',
  gray200: '#D8DCDF',
  gray300: '#B9BEC0',
  gray400: '#999999',
  gray500: '#646464',
  gray600: '#3D3D3D',
  gray700: '#202020',

  blue500: '#4A7CE0',
  green500: '#40C174',

  red100: '#FFE1E7',
  red200: '#FFC8D6',
  red300: '#FF9CB3',
  red400: '#FF2E68',
  red500: '#E1024F',
  red600: '#D1003F',
};

export const Colors = {
  transparent: 'rgba(0,0,0,0)',

  /* background color: specially for link button */
  bgWhite: BaseColors.white,
  bgFocus: BaseColors.gray200,

  /*Primary*/
  bgPrimary: BaseColors.pink100,
  bgPrimaryFocus: BaseColors.pink200,
  bgPrimaryOutlineFocus: BaseColors.pink0,
  fgPrimaryNeutralFocus: BaseColors.pink01,
  /**Warning*/

  /* danger */
  bgDangerTonalDefault: BaseColors.red100,
  bgDangerTonalHover: BaseColors.red200,
  bgDangerTonalFocus: BaseColors.red300,

  bgDangerSolidDefault: BaseColors.red500,
  bgDangerSolidHover: BaseColors.red400,
  bgDangerSolidFocus: BaseColors.red600,

  borderOutlineDanger: BaseColors.red500,

  /* foreground color: used for text, icon */
  fgActive: BaseColors.pink100,
  fgInProgress: BaseColors.blue500,
  fgSuccess: BaseColors.green500,
  fgDanger: BaseColors.red500,
  fgWhite: BaseColors.white,

  fgColorGray700: BaseColors.gray700,
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  background: '#EFEFEF',
  card: '#EFEFEF',
};

const FontSize: Record<keyof typeof EFontsSize, number> = {
  small: 12,
  medium: 14,
  large: 16,
  extraLarge: 18,
  doubleExtraLarge: 20,
  tripleExtraLarge: 24,
};

export enum EFontWeight {
  Thin = '100',
  ExtraLight = '200',
  Light = '300',
  Regular = '400',
  Medium = '500',
  SemiBold = '600',
  Bold = '700',
  ExtraBold = '800',
  Black = '900',
}

export enum EFontsFamily {
  Inter = 'Inter',
}

const extraTiny = 4;
const tiny = 8;
const mediumTiny = 12;
const small = tiny * 2; // 16
const regular = tiny * 3; // 24
const medium = tiny * 4; // 32
const large = regular * 2; // 48
const trudiBodyGap = 20;

export const MetricsSizes = {
  extraTiny,
  tiny,
  mediumTiny,
  small,
  regular,
  medium,
  large,
  trudiBodyGap,
};

export enum EFontsStyle {
  Normal = 'normal',
  Italic = 'italic',
}

export default {
  Colors,
  FontsFamily: EFontsFamily,
  BaseColors,
  FontWeight: EFontWeight,
  FontSize,
  NavigationColors,
  MetricsSizes,
  FontStyle: EFontsStyle,
};
