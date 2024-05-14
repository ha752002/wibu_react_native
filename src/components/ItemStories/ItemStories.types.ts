import { IStories } from '../StoryListItem/StoryListItem.types';

export type StoriesProps = {
  stories?: IStories;
  size?: SizeStories;
};

export type SizeStories = 'large' | 'small';
