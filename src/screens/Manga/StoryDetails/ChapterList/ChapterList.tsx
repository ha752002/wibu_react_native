import * as React from 'react';
import { useState } from 'react';
import {
  ScrollView,
  // TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import { ChaptersProps } from './ChapterList.types.ts';
import ItemChapter from './ItemChapter/ItemChapter.tsx';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './ChapterList.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';

const ChapterList = (props: ChaptersProps) => {
  const { chapters } = props;
  const { Layout, Colors } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);
  const [chapterList, setChapterList] = useState(chapters ?? []);

  const [sortOrder, setSortOrder] = useState('asc');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'desc';
    setSortOrder(newOrder);
    const sortedChapters = [...chapterList].reverse();
    setChapterList(sortedChapters);
  };

  // const toggleExpand = () => {
  //   setIsExpanded(!isExpanded);
  // };

  return (
    <WibuView style={styles.container}>
      <WibuView style={[styles.title, Layout.contentBetween]}>
        <WibuIcon name={EIconName.LIST} size={ESize.S} />
        <WibuText fontSize={ESize.L} color="fgColorGray700">
          Chapter list
        </WibuText>
        <TouchableHighlight
          onPress={handleSort}
          underlayColor={Colors.bgPrimary}
          style={styles.filter}
        >
          <WibuIcon name={EIconName.FILTER} size={ESize.S} />
        </TouchableHighlight>
      </WibuView>

      <WibuView
        style={[
          styles.chapters,
          { height: isExpanded ? styles.extend : styles.collapse },
        ]}
      >
        <ScrollView>
          {chapterList &&
            chapterList.map((chapter, index) => (
              <ItemChapter chapter={chapter} key={index} />
            ))}
        </ScrollView>
      </WibuView>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={styles.seeMoreButton}
      >
        <WibuText fontSize={ESize.M} color={'fgColorGray700'}>
          {isExpanded ? 'Collapse' : 'Extend'}
        </WibuText>
      </TouchableOpacity>
    </WibuView>
  );
};

export default ChapterList;
