import { IStories } from '../Story/Story.types';

export type StoriesProps = {
  stories?: IStories;
  size?: SizeStories;
};

export type SizeStories = 'large' | 'small';
