import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import { StoriesProps } from './RowList.types.ts';
import { ScrollView } from 'react-native';

import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './RowList.styles.ts';

import ItemStories from '../../ItemStories/ItemStories.tsx';

const RowList = (props: StoriesProps) => {
  const { stories, fullScreen } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.storyListItemContainer}>
      {/* <WibuView style={[styles.titleGroup, Layout.contentBetween]}>
        <WibuText fontSize={ESize.XL} color="fgColorGray700">
          {title}
        </WibuText>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate(ScreenNames.GENRE, { id: 1 });
          }}
        >
          <WibuIcon name={EIconName.MORE_HORIZONTAL} size={ESize.XL} />
        </TouchableHighlight>
      </WibuView> */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storyListItemStyleGroup}
      >
        {stories &&
          stories.map((story, index) => (
            <WibuView key={index} style={styles.storyListItemStyle}>
              <ItemStories stories={story} fullScreen={fullScreen} />
            </WibuView>
          ))}
      </ScrollView>
    </WibuView>
  );
};

export default RowList;
