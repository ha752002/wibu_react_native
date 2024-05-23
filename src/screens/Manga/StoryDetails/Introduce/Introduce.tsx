import * as React from 'react';
// import { View, Image, ScrollView } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';

import { IntroduceProps } from './Introduce.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

// import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './Introduce.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';

const Information = (props: IntroduceProps) => {
  const { introduce } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <WibuView style={styles.introduce}>
        <WibuText>{introduce}</WibuText>
      </WibuView>
    </WibuView>
  );
};

export default Information;
