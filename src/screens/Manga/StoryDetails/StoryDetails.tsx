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
// import { useTheme } from '~/hooks/useTheme.ts';

const StoryDetails = (props: StoryDetailsProps) => {
  const { story } = props;
  // const { Layout } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <View style={styles.container}>
      <Thumbnail thumbnail={story?.story?.thumbnail} />
      <WibuView style={styles.content}>
        <Information
          name={story?.story?.name}
          author={story?.story?.author}
          translator={story?.story?.translator}
        />
        <Genres genres={story?.Genre} />

        <Introduce
          introduce={story?.story?.introduce}
          name={story?.story?.name}
        />
        <ChapterList chapters={story?.chapters} />
      </WibuView>
    </View>
  );
};

export default StoryDetails;
