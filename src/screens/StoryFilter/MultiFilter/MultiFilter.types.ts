import { IGenre } from '~/screens/Manga/StoryDetails/Genres/Genres.types';

export type MultiFilterProps = {
  genre: IGenre[];
  selectedGenreId?: number[];
  searchContent?: string;
};
