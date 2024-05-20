import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './GridList.types.ts';
import { FlatList } from 'react-native';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './GridList.styles.ts';
import ItemStories from '../../ItemStories/ItemStories.tsx';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const GridList = (props: StoriesProps) => {
  const { stories } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  const EmptyListMessage = () => (
    <WibuView style={styles.emptyList}>
      <WibuIcon name={EIconName.BOOK} size={ESize.M} />
      <WibuText fontSize={ESize.XL}>No stories available</WibuText>
    </WibuView>
  );

  const GridForm = () => (
    <FlatList
      data={stories}
      renderItem={({ item }) => (
        <WibuView style={styles.item}>
          <ItemStories stories={item} size="large" />
        </WibuView>
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      ListEmptyComponent={EmptyListMessage}
      contentContainerStyle={styles.storyList}
    />
  );

  return (
    <WibuView style={[styles.center, styles.storyListContainer]}>
      {GridForm()}
    </WibuView>
  );
};

export default GridList;
