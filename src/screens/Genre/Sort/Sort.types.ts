import { SortType } from '../../../navigators/ApplicationcNavigator/ApplicationNavigator.types';

export type SortProps = {
  selectedGenreId: number;
  SelectedSort?: SortType;
  searchContent?: string;
};

export interface ISort {
  Sort: SortType;
}

export const SortList: ISort[] = [
  { Sort: 'new' },
  { Sort: 'hot' },
  { Sort: 'full' },
  { Sort: 'chapters' },
  { Sort: 'followers' },
  { Sort: 'likes' },
  { Sort: 'view' },
  { Sort: 'update' },
];
