import { IGenre } from '~/screens/Manga/StoryDetails/Genres/Genres.types';

export type SelectedGenreProps = {
  genres: IGenre[];
  selectedGenreId: number[];
  searchContent?: string;
};
