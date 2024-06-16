import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

import { StoriesProps } from './GridList.types.ts';
import { FlatList } from 'react-native';

import { useTheme } from '~/hooks/useTheme.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './GridList.styles.ts';

import ItemStories from '../../ItemStories/ItemStories.tsx';
import EmptyList from '../../EmptyList/EmptyList.tsx';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const GridList = (props: StoriesProps) => {
  const { stories, title } = props;
  const { Layout } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={[styles.center, styles.storyListContainer]}>
      <WibuView style={[styles.titleGroup, Layout.contentBetween]}>
        <WibuText fontSize={ESize.XL} color="fgColorGray700">
          {title}
        </WibuText>
        <WibuIcon name={EIconName.FILTER} size={ESize.S} />
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
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.storyList}
      />
    </WibuView>
  );
};

export default GridList;
