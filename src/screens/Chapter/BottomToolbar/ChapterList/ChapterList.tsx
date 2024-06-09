import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
// import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { ChapterListProps } from './ChapterList.types.ts';

import { styleCreator } from './ChapterList.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
const ChapterList = (props: ChapterListProps) => {
  const { name } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text>{name}</Text>
        {/* <PageTitle title={storyContentData.nameChapter}></PageTitle> */}
      </ScrollView>
    </View>
  );
};

export default ChapterList;
