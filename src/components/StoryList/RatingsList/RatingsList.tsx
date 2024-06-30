import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { RatingsListProps } from './RatingsList.types.ts';

// import { FlatList } from 'react-native';

import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './RatingsList.styles.ts';

import Story from '../../Story/Story.tsx';
import EmptyList from '../../EmptyList/EmptyList.tsx';

const RatingsList = (props: RatingsListProps) => {
  const { stories } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={[styles.center, styles.storyListContainer]}>
      {stories && stories.length > 0 ? (
        stories.map((item, index) => (
          <WibuView key={index} style={styles.item}>
            <Story ratings={index} shadow={false} series={item} />
          </WibuView>
        ))
      ) : (
        <EmptyList />
      )}
    </WibuView>
  );
};

export default RatingsList;
