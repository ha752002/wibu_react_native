import { IGenre } from '../../Manga/StoryDetails/Genres/Genres.types';
import { SortType } from '../../../navigators/ApplicationcNavigator/ApplicationNavigator.types';

export type FilterProps = {
  SelectedGenreId: number;
  Genre: IGenre[];
  Sort?: SortType;
};
