import { useTheme } from './useTheme.ts';
import { useMemo } from 'react';
import { Theme } from '../../@types/theme';

export interface Styles {
  [key: string]: any;
}

export interface StyleCreator<P = any> {
  (theme: Theme, props: P): Styles;
}

export const useThemeStyles = <P>(
  styleCreator: StyleCreator<P>,
  props: P,
  dependencies: any[],
): Styles => {
  const theme = useTheme();
  return useMemo(
    () => styleCreator(theme, props),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [styleCreator, theme, ...dependencies],
  );
};
