import { IGenre } from '../../screens/Manga/StoryDetails/Genres/Genres.types';
import { IStoryInformation } from '../../screens/Manga/StoryDetails/Information/Information.types';
import { storiesData } from '../../components/StoryList/StoryList.types';

export type GenreProps = {
  Story?: IStoryInformation[];
  Genre: IGenre;
};

export const GenreData: GenreProps = {
  Genre: {
    id: 6,
    genre: 'Horror',
    AgeWarning: true,
    describe:
      'Nhằm tạo ra cảm giác sợ hãi và kinh dị, horror chứa đựng các yếu tố ma quái và rùng rợn.',
  },
  Story: storiesData.stories,
};
