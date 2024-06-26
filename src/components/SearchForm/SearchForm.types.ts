import { SortType } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';
import { IGenre } from '~/screens/Manga/StoryDetails/Genres/Genres.types';

export type SearchFormProps = {
  searchContent?: string;
  SelectedGenreId?: number;
  genre?: IGenre[];
  sort?: SortType;
};
