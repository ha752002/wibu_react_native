// import { IGenre } from '../Manga/StoryDetails/Genres/Genres.types';

import { StackScreenProps } from '@react-navigation/stack';
import { ScreenNames } from '~/enums/screenNames.enum';
import { ApplicationStackParams } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';

export type TrendingProps = StackScreenProps<
  ApplicationStackParams,
  ScreenNames.TRENDING
>;
