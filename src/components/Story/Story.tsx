import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './Story.types.ts';
import { Image } from 'react-native';

import { useTheme } from '../../hooks/useTheme.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './Story.styles.ts';

import { commonUtils } from '../../utils/common.utils.ts';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

const Story = (props: StoriesProps) => {
  const { stories } = props;
  const { Layout } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);

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
          <WibuText>{stories?.author || 'Updating...'}</WibuText>
        </WibuView>
        <WibuView style={[Layout.contentBetween]}>
          <WibuText>Chapter : {stories?.chapters?.length || 0}</WibuText>
          <WibuText>
            {commonUtils.formatViews(stories?.views || 0)} Views
          </WibuText>
        </WibuView>
      </WibuView>
    </WibuView>
  );
};

export default Story;
