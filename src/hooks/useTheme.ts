import { Fonts } from '../themes/Fonts.ts';
import { Theme } from '../../@types/theme';
import { Images } from '../themes/Images.ts';
import { Layout } from '../themes/Layout.ts';
import Variable from '../themes/Variable.ts';

export const useTheme = (): Theme => {
  return {
    Fonts: Fonts(),
    Images: Images(),
    Layout: Layout(),
    ...Variable,
  };
};
