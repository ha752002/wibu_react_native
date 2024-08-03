import { IGenre } from '~/screens/Manga/StoryDetails/Genres/Genres.types';

export type GenreItemProps = {
  item: IGenre;
  isSelected: boolean;
  onSelect: (id: number) => void;
};
