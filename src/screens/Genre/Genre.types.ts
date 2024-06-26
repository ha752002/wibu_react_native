import { storiesData } from '../../components/StoryList/StoryList.types';
import { StackScreenProps } from '@react-navigation/stack';
import {
  ApplicationStackParams,
  IGenresParams,
} from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';
import { ScreenNames } from '~/enums/screenNames.enum';

export type GenreProps = StackScreenProps<
  ApplicationStackParams,
  ScreenNames.GENRE
>;

export const GenreData: IGenresParams = {
  id: 1,
  genre: {
    id: 6,
    genre: 'Horror',
    ageWarning: true,
    describe:
      'Nhằm tạo ra cảm giác sợ hãi và kinh dị, horror chứa đựng các yếu tố ma quái và rùng rợn.',
  },
  story: storiesData.stories,
};
