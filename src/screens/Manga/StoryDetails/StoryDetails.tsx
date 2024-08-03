import * as React from 'react';
import { View } from 'react-native';
// import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';

import { StoryDetailsProps } from './StoryDetails.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import ChapterList from './ChapterList/ChapterList.tsx';
import AgeWarning from '../../../components/AgeWarning/AgeWarning.tsx';
import Genres from './Genres/Genres.tsx';
import Information from './Information/Information.tsx';
import Thumbnail from './Thumbnail/Thumbnail.tsx';
import Introduce from './Introduce/Introduce.tsx';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

// import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './StoryDetails.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
// import { useTheme } from '~/hooks/useTheme.ts';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
// import { ESize } from '~/enums/size.enums.ts';

const StoryDetails = (props: StoryDetailsProps) => {
  const { story } = props;
  console.log(1, story?.storyInformation?.thumbnail);

  // const { Colors } = useTheme();
  const navigation = useNavigation<ApplicationNavigationProps>();

  const styles = useThemeStyles(styleCreator, props, []);

  const hasAgeWarning: boolean = story.Genre.some(
    genre => genre.ageWarning === true,
  );

  return (
    <View style={styles.container}>
      <Thumbnail thumbnail={story?.storyInformation?.thumbnail} />
      <WibuView style={styles.content}>
        <Information storyInformation={story?.storyInformation} />

        <WibuView style={styles.read}>
          <WibuButton
            onPress={() => {
              navigation.navigate(ScreenNames.CHAPTER, {
                id: story?.storyInformation?.id,
              });
            }}
            appearance={'filled'}
            variant={'primary'}
          >
            Start reading
          </WibuButton>

          <WibuButton
            onPress={() => {
              navigation.navigate(ScreenNames.CHAPTER, {
                id: story?.storyInformation?.id,
              });
            }}
            appearance={'outline'}
            variant={'primary'}
          >
            Read the latest chapter
          </WibuButton>

          {/* <WibuView style={[styles.icon, styles.followed]}>
            <WibuIcon name={EIconName.HEART} size={ESize.S} color={Colors.bgWhite} />
          </WibuView> */}
        </WibuView>

        <Genres genres={story?.Genre} />
        <AgeWarning ageWarning={hasAgeWarning} />
        <Introduce
          introduce={story?.storyInformation?.introduce}
          name={story?.storyInformation?.name}
        />
        <ChapterList chapters={story?.chapters} />
      </WibuView>
    </View>
  );
};

export default StoryDetails;
