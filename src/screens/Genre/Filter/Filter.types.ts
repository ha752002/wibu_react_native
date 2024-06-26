import { IGenre } from '../../Manga/StoryDetails/Genres/Genres.types';
import { SortType } from '../../../navigators/ApplicationcNavigator/ApplicationNavigator.types';

export type FilterProps = {
  selectedGenreId: number;
  genres: IGenre[];
  sort?: SortType;
  searchContent?: string;
};
