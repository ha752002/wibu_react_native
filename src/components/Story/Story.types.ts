import { IStoryInformation } from '../../screens/Manga/StoryDetails/Information/Information.types';

export type seriesProps = {
  series: IStoryInformation;
  shadow: boolean;
  ratings?: number;
};
