// import { IGenre } from '../Manga/StoryDetails/Genres/Genres.types';

import { SortType } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';

export type KeywordListProps = {
  trendingKeywords: IKeyword[];
  selectedKeyword?: string;
};

export interface IKeyword {
  id: number;
  trendingKeywords: string;
  SortType: SortType;
}

export const KeywordData: KeywordListProps = {
  // trendingKeywords:['top all'],
  trendingKeywords: [
    { id: 1, SortType: 'followers', trendingKeywords: 'Trending' },
    { id: 2, SortType: 'view', trendingKeywords: 'top manga' },
    { id: 3, SortType: 'new', trendingKeywords: 'new' },
    { id: 4, SortType: 'view', trendingKeywords: 'top Manhua' },
    { id: 5, SortType: 'view', trendingKeywords: 'top followers' },
    { id: 6, SortType: 'view', trendingKeywords: 'top followers' },
    { id: 7, SortType: 'view', trendingKeywords: 'top followers' },
    { id: 8, SortType: 'view', trendingKeywords: 'top followers' },
  ],
};
