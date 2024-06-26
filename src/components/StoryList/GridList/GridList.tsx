import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { GridListProps } from './GridList.types.ts';
import { FlatList } from 'react-native';

import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './GridList.styles.ts';

import ItemStories from '../../ItemStories/ItemStories.tsx';
import EmptyList from '../../EmptyList/EmptyList.tsx';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const GridList = (props: GridListProps) => {
  const { stories } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={[styles.center, styles.storyListContainer]}>
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
