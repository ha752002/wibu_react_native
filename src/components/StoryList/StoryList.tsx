import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './StoryList.types.ts';
import { FlatList } from 'react-native';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './StoryList.styles.ts';
import ItemStories from '../ItemStories/ItemStories.tsx';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const StoryList = (props: StoriesProps) => {
  const { stories, title } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.storyListContainer}>
      <WibuView style={styles.titleGroup}>
        <WibuText fontSize={ESize.XL} color="fgColorGray700">
          {title}
        </WibuText>
        {/* <WibuIcon name={EIconName.MORE_HORIZONTAL} size={ESize.XL} /> */}
      </WibuView>
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <WibuView style={styles.item}>
            <ItemStories stories={item} size="large" />
          </WibuView>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </WibuView>
  );
};

export default StoryList;
