import { ScreenNames } from '~/enums/screenNames.enum.ts';
import {
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import Home from '~/screens/Home/Home.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import Trending from '~/screens/Trending/Trending.tsx';
import MySelf from '~/screens/MySelf/MySelf.tsx';
import Search from '~/screens/Search/Search.tsx';
import React from 'react';
import { IStoryInformation } from '~/screens/Manga/StoryDetails/Information/Information.types';
// import { IChapters } from '~/screens/Manga/StoryDetails/ChapterList/ChapterList.types';
import { IGenre } from '~/screens/Manga/StoryDetails/Genres/Genres.types';
import { selectedContentType } from '~/screens/MySelf/Otherinformation/Otherinformation.types';

export type ApplicationStackParams = {
  [ScreenNames.LOGIN]: undefined;
  [ScreenNames.REGISTER]: undefined;
  [ScreenNames.MY_SELF]: IMyselfParams;
  [ScreenNames.MANGA]: IstoryParams;
  [ScreenNames.CHAPTER]: IChapter;
  [ScreenNames.GENRE]: IGenresParams;
  [ScreenNames.SEARCH]: undefined;
  [ScreenNames.HOME]: undefined;
  [ScreenNames.TRENDING]: ITrendingParams;
  [ScreenNames.STORYFILTER]: IStoryFilterParams;
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
export interface IParams {
  id?: number;
}

export interface IstoryParams {
  id?: number;
}

export interface IMyselfParams {
  id?: number;
  selectedContent?: selectedContentType;
}

export interface IChapter {
  id?: number;
  nameChapter?: string;
  urlImg?: string[];
}

export interface ITrendingParams {
  id?: number;
  sort?: SortType;
  trendingKeywords?: string;
}

export interface IStoryFilterParams {
  id: number[];
  sort?: SortType;
  // story?: IStoryInformation[];
  searchKeywords?: string;
}

export interface IGenresParams {
  id: number;
  sort?: SortType;
  story?: IStoryInformation[];
  genre?: IGenre;
  searchKeywords?: string;
}

export type SortType =
  | 'new'
  | 'hot'
  | 'full'
  | 'chapters'
  | 'followers'
  | 'likes'
  | 'view'
  | 'update';
