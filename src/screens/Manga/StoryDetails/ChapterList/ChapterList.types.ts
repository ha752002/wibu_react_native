// import { IStories } from '~/components/Story/Story.types';

export type ChaptersProps = {
  chapters?: IChapters[];
};

export interface IChapters {
  id: number;
  chapter?: string;
  UpdateTime: Date;
}
