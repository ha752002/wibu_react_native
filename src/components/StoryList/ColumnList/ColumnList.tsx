import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { ColumnListProps } from './ColumnList.types.ts';

// import { FlatList } from 'react-native';

import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './ColumnList.styles.ts';

import Story from '../../Story/Story.tsx';
import EmptyList from '../../EmptyList/EmptyList.tsx';

const ColumnList = (props: ColumnListProps) => {
  const { stories } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={[styles.center, styles.storyListContainer]}>
      {/* <FlatList
        data={stories}
        renderItem={({ item }) => (
          <WibuView style={styles.item}>
            <Story series={item} />
          </WibuView>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={1}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.storyList}
      /> */}

      {stories && stories.length > 0 ? (
        stories.map((item, index) => (
          <WibuView key={index} style={styles.item}>
            <Story shadow series={item} />
          </WibuView>
        ))
      ) : (
        <EmptyList />
      )}
    </WibuView>
  );
};

export default ColumnList;
