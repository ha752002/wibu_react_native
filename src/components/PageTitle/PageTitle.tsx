import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './PageTitle.types.ts';
// import { Image } from 'react-native';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './PageTitle.styles.ts';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const PageTitle = (props: StoriesProps) => {
  const { title } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.titleContainer}>
      <WibuIcon name={EIconName.ARROW_LEFT} size={ESize.M} />
      <WibuView style={styles.title}>
        <WibuText fontSize={ESize.L} numberOfLines={1} color={'fgColorGray700'}>
          {title}
        </WibuText>
      </WibuView>
      <WibuIcon name={EIconName.MORE_HORIZONTAL} size={ESize.XL} />
    </WibuView>
  );
};

export default PageTitle;
