import * as React from 'react';
import { ScrollView } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { ChaptersProps } from './ChapterList.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { Layout } from '~/themes/Layout.ts';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './ChapterList.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';

const ChapterList = (props: ChaptersProps) => {
  const { chapters } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <WibuView style={styles.title}>
        <WibuIcon name={EIconName.LIST} size={ESize.S} />

        <WibuText fontSize={ESize.L} color="fgColorGray700">
          Chapter list
        </WibuText>

        <WibuIcon name={EIconName.FILTER} size={ESize.S} />
      </WibuView>
      <WibuView style={styles.chapters}>
        <ScrollView>
          {chapters &&
            chapters.map((chapter, index) => (
              <WibuView key={index} style={styles.chapter}>
                <WibuIcon name={EIconName.BOOK} size={ESize.S} />
                <WibuText numberOfLines={1}>{chapter}</WibuText>
              </WibuView>
            ))}
        </ScrollView>
      </WibuView>
    </WibuView>
  );
};

export default ChapterList;
