import { IStories } from '../Story/Story.types';

export type StoriesProps = {
  title?: string;
  stories?: IStories[];
  viewType?: viewType;
};

export type viewType = 'column' | 'grid';
