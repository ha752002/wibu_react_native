import * as React from 'react';
import { View } from 'react-native';
// import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { StoryDetailsProps } from './StoryDetails.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import ChapterList from './ChapterList/ChapterList.tsx';
import Genres from './Genres/Genres.tsx';
import Information from './Information/Information.tsx';
import Thumbnail from './Thumbnail/Thumbnail.tsx';
import Introduce from './Introduce/Introduce.tsx';

// import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './StoryDetails.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';

const StoryDetails = (props: StoryDetailsProps) => {
  const { story } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <View style={styles.container}>
      <Thumbnail thumbnail={story.thumbnail} />
      <WibuView style={styles.content}>
        <Information name={story?.name} author={story?.author} />
        <Genres genres={story.genres} />

        <Introduce introduce={story?.introduce} />
        <ChapterList chapters={story.chapters} />
      </WibuView>
    </View>
  );
};

export default StoryDetails;
