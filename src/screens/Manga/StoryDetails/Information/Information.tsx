import * as React from 'react';
import { Image } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';

import { InformationProps } from './Information.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './Information.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';

import { commonUtils } from '~/utils/common.utils.ts';

const Information = (props: InformationProps) => {
  const { storyInformation } = props;
  const { Layout } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <WibuView style={styles.thumbnail}>
        <Image
          source={{ uri: storyInformation?.thumbnail }}
          style={styles.img}
        />
      </WibuView>
      <WibuView style={styles.information}>
        <WibuText
          fontSize={ESize.XL}
          numberOfLines={1}
          color={'fgColorGray700'}
        >
          {storyInformation?.name}
        </WibuText>
        <WibuView style={Layout.rowHCenter}>
          <WibuText color="bgPrimary">Author :</WibuText>
          <WibuText>{storyInformation?.author || 'Updating...'}</WibuText>
        </WibuView>
        <WibuView style={Layout.rowHCenter}>
          <WibuText color="bgPrimary">Translated bys : </WibuText>
          <WibuText>{storyInformation?.translator || 'Updating...'}</WibuText>
        </WibuView>
        <WibuView style={Layout.rowHCenter}>
          <WibuText color="bgPrimary">View : </WibuText>
          <WibuText>
            {commonUtils.formatViews(storyInformation?.views || 0)}{' '}
          </WibuText>
        </WibuView>
      </WibuView>
    </WibuView>
  );
};
export default Information;
