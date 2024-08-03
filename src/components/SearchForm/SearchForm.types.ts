import { SortType } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';
import { IGenre } from '~/screens/Manga/StoryDetails/Genres/Genres.types';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

export type SearchFormProps = {
  searchContent?: string;
  selectedGenreId?: number;
  multiSelectedGenreId?: number[];
  genre?: IGenre[];
  sort?: SortType;
  nextScreen?: ScreenNames;
};
