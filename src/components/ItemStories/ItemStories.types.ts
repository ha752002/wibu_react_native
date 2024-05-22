import { IStories } from '../Story/Story.types';

export type StoriesProps = {
  // onPress: () => void;
  stories?: IStories;
  size?: SizeStories;
};

export type SizeStories = 'large' | 'small';
