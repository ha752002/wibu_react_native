export type StoriesProps = {
  title?: string;
  stories?: IStories[];
};

export interface IStories {
  id: number;
  name?: string;
  author?: string;
  thumbnail?: string;
  // borderColor?: string;
}
