import * as React from 'react';
// import { ScrollView } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { ItemChapterProps } from './ItemChapter.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { Layout } from '~/themes/Layout.ts';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

import { styleCreator } from './ItemChapter.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';

const ItemChapter = (props: ItemChapterProps) => {
  const { chapter } = props;
  const { Layout } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <WibuView style={[styles.chapter, Layout.rowHCenter]}>
        <WibuIcon name={EIconName.BOOK} size={ESize.S} />
        <WibuText numberOfLines={1}>{chapter}</WibuText>
      </WibuView>
    </WibuView>
  );
};

export default ItemChapter;
