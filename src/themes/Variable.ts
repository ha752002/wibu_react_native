import {ThemeNavigationColors} from '../../@types/theme';
import {EFontsSize} from '../enums/font.enum.ts';

const BaseColors = {
  white: '#FFFFFF',
  black: '#000000',

  gray50: '#F2F5F7',
  gray100: '#E7EAED',
  gray150: '#E6E6E6',
  gray200: '#D8DCDF',
  gray300: '#B9BEC0',
  gray400: '#999999',
  gray500: '#646464',
  gray600: '#3D3D3D',
  gray700: '#202020',

  blue50: '#E3F2FD',
  blue100: '#BBDEFB',
  blue200: '#90CAF9',
  blue300: '#64B5F6',
  blue400: '#42A5F5',
  blue500: '#2196F3',
  blue600: '#1E88E5',
  blue700: '#1976D2',

  green50: '#E8F5E9',
  green100: '#C8E6C9',
  green200: '#A5D6A7',
  green300: '#81C784',
  green400: '#66BB6A',
  green500: '#4CAF50',
  green600: '#43A047',
  green700: '#388E3C',

  yellow50: '#FFFDE7',
  yellow100: '#FFF9C4',
  yellow200: '#FFF59D',
  yellow300: '#FFF176',
  yellow400: '#FFEE58',
  yellow500: '#FFEB3B',
  yellow600: '#FDD835',
  yellow700: '#FBC02D',

  pink0: '#ffc0c4',
  pink100: '#FF737D',
  pink200: '#fc6069',
  pink300: '#FF5963',
  pink400: '#FF414B',
  pink500: '#FF3540',
  pink600: '#FF2934',

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

  bgPrimaryTonalDefault: BaseColors.pink0,
  bgPrimarySolidDefault: BaseColors.pink100,

  /*success*/
  bgSuccess: BaseColors.green600,
  bgSuccessFocus: BaseColors.green400,
  bgSuccessOutlineFocus: BaseColors.green500,

  bgSuccessTonalDefault: BaseColors.green200,
  bgSuccessSolidDefault: BaseColors.green600,

  /*Warning*/
  bgWarning: BaseColors.yellow700,
  bgWarningFocus: BaseColors.yellow500,
  bgWarningOutlineFocus: BaseColors.yellow600,

  bgWarningTonalDefault: BaseColors.yellow200,
  bgWarningSolidDefault: BaseColors.yellow700,

  /* danger */
  bgDanger: BaseColors.red500,
  bgDangerFocus: BaseColors.red400,
  bgDangerOutlineFocus: BaseColors.red600,

  bgDangerTonalDefault: BaseColors.red200,
  bgDangerTonalHover: BaseColors.red300,
  bgDangerTonalFocus: BaseColors.red400,

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
