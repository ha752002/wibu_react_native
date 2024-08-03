import * as React from 'react';
import { useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { View, Animated } from 'react-native';
// import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import StoryContent from './StoryContent/StoryContent.tsx';
import BottomToolbar from './BottomToolbar/BottomToolbar.tsx';
import PageTitle from '~/components/PageTitle/PageTitle.tsx';

import { ChapterProps, storyContentData } from './Chapter.types.ts';

import { styleCreator } from './Chapter.styles.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { useRoute, RouteProp } from '@react-navigation/native';
import { IParams } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
const Chapter = (props: ChapterProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const { params } = useRoute<RouteProp<{ params: IParams }, 'params'>>();

  const [showToolbar, setShowToolbar] = useState(false);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const lastOffsetY = useRef(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
    {
      useNativeDriver: false,
    },
  );

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const currentOffsetY = event.nativeEvent.contentOffset.y;
    if (currentOffsetY < lastOffsetY.current && !showToolbar) {
      setShowToolbar(true);
    } else if (currentOffsetY > lastOffsetY.current && showToolbar) {
      setShowToolbar(false);
    }
    console.log(currentOffsetY > lastOffsetY.current && !showToolbar);

    lastOffsetY.current = currentOffsetY;
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.content}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
      >
        <PageTitle title={'chapter ' + params.id} />
        <View>
          <StoryContent urlImg={storyContentData.urlImg} />
        </View>
      </Animated.ScrollView>
      {showToolbar && <BottomToolbar />}
    </View>
  );
};

export default Chapter;
