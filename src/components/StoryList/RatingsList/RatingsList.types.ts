import { IStoryInformation } from '../../../screens/Manga/StoryDetails/Information/Information.types';

export type RatingsListProps = {
  title?: string;
  stories?: IStoryInformation[];
  ratings?: number;
};
