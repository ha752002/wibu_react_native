// import { IStories } from '~/components/Story/Story.types';

export type GenresProps = {
  genres?: IGenre[];
};

export interface IGenre {
  id?: number;
  genre?: string;
  AgeWarning?: boolean;
}
