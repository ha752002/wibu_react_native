import { ScreenNames } from '~/enums/screenNames.enum.ts';
import {
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import Home from '~/screens/Home/Home.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import MySelf from '~/screens/MySelf/MySelf.tsx';
import Trending from '~/screens/Trending/Trending.tsx';
import Search from '~/screens/Search/Search.tsx';
import React from 'react';

export type ApplicationStackParams = {
  [ScreenNames.LOGIN]: undefined;
  [ScreenNames.REGISTER]: undefined;
  [ScreenNames.MANGA]: undefined;
  [ScreenNames.CHAPTER]: undefined;
  [ScreenNames.MAIN_BOTTOM_TAB_NAVIGATOR]: NavigatorScreenParams<BottomTabParams>;
};

export type ApplicationNavigationProps = NavigationProp<ApplicationStackParams>;

export type BottomTabParams = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.TRENDING]: undefined;
  [ScreenNames.MY_SELF]: undefined;
  [ScreenNames.SEARCH]: undefined;
};

interface IBottomTabItem {
  iconName: EIconName;
  component: (props: any) => React.JSX.Element;
  screenName: keyof BottomTabParams;
}

export const ListBottomTab: IBottomTabItem[] = [
  {
    iconName: EIconName.HOME,
    component: Home,
    screenName: ScreenNames.HOME,
  },
  {
    iconName: EIconName.TRENDING_UP,
    component: Trending,
    screenName: ScreenNames.TRENDING,
  },
  {
    iconName: EIconName.SEARCH,
    component: Search,
    screenName: ScreenNames.SEARCH,
  },
  {
    iconName: EIconName.USER,
    component: MySelf,
    screenName: ScreenNames.MY_SELF,
  },
];
