import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './Story.types.ts';
import { Image } from 'react-native';

import { useTheme } from '../../hooks/useTheme.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './Story.styles.ts';
// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

const Story = (props: StoriesProps) => {
  const { stories } = props;
  const { Layout } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'm';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'k';
    }
    return views.toString();
  };

  return (
    <WibuView style={styles.storyContainer}>
      <Image source={{ uri: stories?.thumbnail }} style={styles.img} />
      <WibuView style={styles.storyInformation}>
        <WibuView style={styles.basicInformation}>
          <WibuText
            fontSize={ESize.L}
            numberOfLines={2}
            color={'fgColorGray700'}
          >
            {stories?.name}
          </WibuText>
          <WibuText>{stories?.author}</WibuText>
        </WibuView>
        <WibuView style={[Layout.contentBetween]}>
          <WibuText>Chapter : {stories?.chapter || 0}</WibuText>
          <WibuText>{formatViews(stories?.views || 0)} Views</WibuText>
        </WibuView>
      </WibuView>
    </WibuView>
  );
};

export default Story;
