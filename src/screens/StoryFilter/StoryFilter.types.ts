import { StackScreenProps } from '@react-navigation/stack';
import { ScreenNames } from '~/enums/screenNames.enum';
import { ApplicationStackParams } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';

export type StoryFilterProps = StackScreenProps<
  ApplicationStackParams,
  ScreenNames.STORYFILTER
>;
