import * as React from 'react';
import { View, Image, ScrollView } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { StoryDetailsProps } from './StoryDetails.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './StoryDetails.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';

const StoryDetails = (props: StoryDetailsProps) => {
  const { story } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <View style={styles.container}>
      <WibuView style={styles.thumbnail}>
        <Image source={{ uri: story?.thumbnail }} style={styles.img} />
      </WibuView>
      <WibuText fontSize={ESize.XL} numberOfLines={1} color={'fgColorGray700'}>
        {story?.name}
      </WibuText>
      <WibuText>{story?.introduce}</WibuText>

      {story.genres &&
        story.genres.map((genre, index) => (
          <WibuView key={index}>
            <WibuText>{genre}</WibuText>
          </WibuView>
        ))}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storyListItemStyleGroup}
      >
        {story.chapters &&
          story.chapters.map((chapter, index) => (
            <WibuView key={index}>
              <WibuText>{chapter}</WibuText>
            </WibuView>
          ))}
      </ScrollView>
    </View>
  );
};

export default StoryDetails;
