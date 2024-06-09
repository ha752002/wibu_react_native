export type StoriesProps = {
  stories?: IStories;
};

export interface IStories {
  id: number;
  name: string;
  author?: string;
  translator?: string;
  thumbnail?: string;
  views?: number;
  chapter?: number;
  introduce?: string;
  genres: string[];
  chapters?: string[];
  // borderColor?: string;
}
