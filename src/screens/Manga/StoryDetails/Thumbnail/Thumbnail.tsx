import * as React from 'react';
import { Image } from 'react-native';
// import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';

import { InformationProps } from './Thumbnail.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

// import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './Thumbnail.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';

const Thumbnail = (props: InformationProps) => {
  const { thumbnail } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <WibuView style={styles.thumbnail}>
        <Image source={{ uri: thumbnail }} style={styles.img} />
      </WibuView>
    </WibuView>
  );
};

export default Thumbnail;
