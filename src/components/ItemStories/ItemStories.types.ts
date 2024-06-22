import { IStoryInformation } from '../../screens/Manga/StoryDetails/Information/Information.types';

export type StoriesProps = {
  // onPress: () => void;
  stories: IStoryInformation;
  size?: SizeStories;
};

export type SizeStories = 'large' | 'small';
