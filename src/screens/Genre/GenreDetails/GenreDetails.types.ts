import { IGenre } from '../../../screens/Manga/StoryDetails/Genres/Genres.types';
import { IStoryInformation } from '../../../screens/Manga/StoryDetails/Information/Information.types';

export type GenreDetailsProps = {
  Story?: IStoryInformation[];
  Genre: IGenre;
};
