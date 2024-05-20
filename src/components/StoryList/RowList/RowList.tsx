import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './RowList.types.ts';
import { ScrollView } from 'react-native';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './RowList.styles.ts';
import ItemStories from '../../ItemStories/ItemStories.tsx';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const RowList = (props: StoriesProps) => {
  const { stories, title } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.storyListItemContainer}>
      <WibuView style={[styles.contentBetween, styles.titleGroup]}>
        <WibuText fontSize={ESize.XL}>{title}</WibuText>
        <WibuIcon name={EIconName.MORE_HORIZONTAL} size={ESize.XL} />
      </WibuView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storyListItemStyleGroup}
      >
        {stories &&
          stories.map((story, index) => (
            <WibuView key={index} style={[index !== 0 && { marginLeft: 24 }]}>
              <ItemStories stories={story} />
            </WibuView>
          ))}
      </ScrollView>
    </WibuView>
  );
};

export default RowList;
