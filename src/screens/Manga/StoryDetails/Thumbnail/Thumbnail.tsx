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
import { useTheme } from '~/hooks/useTheme.ts';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
// import { ESize } from '~/enums/size.enums.ts';

const Thumbnail = (props: InformationProps) => {
  const { thumbnail } = props;
  const { Layout } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <WibuView style={[styles.thumbnail, Layout.alignItemsCenter]}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.img}
          blurRadius={1.5}
        />
      </WibuView>
      {/* <WibuView style={styles.groupIcon}>
        <WibuView style={[styles.icon, styles.followed]}>
          <WibuIcon name={EIconName.HEART} size={ESize.S} color={Colors.bgWhite} />

        </WibuView>
        <WibuView style={[styles.icon, styles.default]}>
          <WibuIcon name={EIconName.BOOK} size={ESize.S} color={Colors.bgPrimary} />

        </WibuView>
      </WibuView> */}
    </WibuView>
  );
};

export default Thumbnail;
