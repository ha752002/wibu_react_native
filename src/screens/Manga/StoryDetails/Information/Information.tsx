import * as React from 'react';
// import { View, Image, ScrollView } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';

import { InformationProps } from './Information.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './Information.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';

const Information = (props: InformationProps) => {
  const { author, name, views, translator } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <WibuView>
        <WibuText
          fontSize={ESize.XL}
          numberOfLines={1}
          color={'fgColorGray700'}
        >
          {name}
        </WibuText>
        <WibuText>Author : {author || 'Updating...'}</WibuText>
        <WibuText>Translated bys : {translator || 'Updating...'}</WibuText>
        <WibuText>View : {views || 0} </WibuText>
      </WibuView>
    </WibuView>
  );
};
export default Information;
