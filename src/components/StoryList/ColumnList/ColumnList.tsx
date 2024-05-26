import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

import { StoriesProps } from './ColumnList.types.ts';

// import { FlatList ,SectionList } from 'react-native';
import { FlatList } from 'react-native';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
// import { useTheme } from '~/hooks/useTheme.ts';
import { styleCreator } from './ColumnList.styles.ts';

import Story from '../../Story/Story.tsx';
import EmptyList from '../../EmptyList/EmptyList.tsx';

// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const ColumnList = (props: StoriesProps) => {
  const { stories, title } = props;
  // const {Colors ,Layout } = useTheme()
  const styles = useThemeStyles(styleCreator, props, []);

  // const EmptyListMessage = () => (
  //   <WibuView style={styles.emptyList}>
  //     <WibuIcon name={EIconName.BOOK} size={ESize.M} />
  //     <WibuText fontSize={ESize.XL}>No stories available</WibuText>
  //   </WibuView>
  // );

  const ColumnForm = () => (
    <FlatList
      data={stories}
      renderItem={({ item }) => (
        <WibuView style={styles.item}>
          <Story stories={item} />
        </WibuView>
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={1}
      ListEmptyComponent={EmptyList}
      contentContainerStyle={styles.storyList}
    />
  );

  return (
    <WibuView style={[styles.center, styles.storyListContainer]}>
      <WibuView style={[styles.titleGroup]}>
        <WibuText fontSize={ESize.XL} color="fgColorGray700">
          {title}
        </WibuText>
      </WibuView>
      {ColumnForm()}
    </WibuView>
  );
};

export default ColumnList;
