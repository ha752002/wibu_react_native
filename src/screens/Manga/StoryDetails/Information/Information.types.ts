export type InformationProps = {
  storyInformation?: IStoryInformation;
};

export interface IStoryInformation {
  id: number;
  thumbnail?: string;
  name?: string;
  author?: string;
  translator?: string;
  views?: number;
  chapter?: number;
  introduce?: string;
  status?: statusType;
  created?: Date;
  // genres: string[];
}

export type statusType = 'Updating' | 'Halt' | 'Full';
