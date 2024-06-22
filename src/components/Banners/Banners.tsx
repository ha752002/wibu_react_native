import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { BannersProps } from './Banners.types.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './Banners.styles.ts';
// import Story from '../../Story/Story.tsx';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const Banners = (props: BannersProps) => {
  const { storyInformation } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  let titleBanners = '';
  let bannerStyle = {};
  if (storyInformation.status === 'Full') {
    titleBanners = 'Full !!';
    bannerStyle = styles.full;
  } else if (storyInformation.views && storyInformation.views > 10000) {
    titleBanners = 'Hot !!';
    bannerStyle = styles.hot;
  } else if (
    storyInformation.created &&
    new Date().getTime() - new Date(storyInformation.created).getTime() <
      15 * 24 * 60 * 60 * 1000
  ) {
    titleBanners = 'New';
    bannerStyle = styles.new;
  }

  return (
    <WibuView style={[styles.center, styles.Container, bannerStyle]}>
      {titleBanners && (
        <WibuView style={styles.titleBanners}>
          <WibuText fontSize={ESize.S} color="bgWhite">
            {titleBanners}
          </WibuText>
        </WibuView>
      )}
    </WibuView>
  );
};

export default Banners;
