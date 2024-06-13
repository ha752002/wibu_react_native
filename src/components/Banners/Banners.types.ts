// import { IStories } from '../../Story/Story.types';
import { IStoryInformation } from '../../screens/Manga/StoryDetails/Information/Information.types';

export type BannersProps = {
  titleBanners: BannersType;
  storyInformation: IStoryInformation;
};

export type BannersType = 'New' | 'Hot' | 'Full';
