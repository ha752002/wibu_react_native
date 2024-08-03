import { IStoryInformation } from '../../screens/Manga/StoryDetails/Information/Information.types';

export type StoriesProps = {
  // onPress: () => void;
  stories: IStoryInformation;
  size?: SizeStories;
  fullScreen?: boolean;
};

export type SizeStories = 'large' | 'small';
