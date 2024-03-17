import { useTheme } from './useTheme.ts';
import { useMemo } from 'react';
import { Theme } from '../../@types/theme';

export interface Styles {
  [key: string]: any;
}

export interface StyleCreator {
  (theme: Theme, props: any): Styles;
}

export const useThemeStyles = (
  styleCreator: StyleCreator,
  props: any,
  dependencies: any[],
) => {
  const theme = useTheme();
  return useMemo(
    () => styleCreator(theme, props),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [styleCreator, theme, ...dependencies],
  );
};
