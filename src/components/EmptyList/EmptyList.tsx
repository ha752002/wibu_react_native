import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { EmptyListProps } from './EmptyList.types.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './EmptyList.styles.ts';
// import Story from '../../Story/Story.tsx';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const EmptyList = (props: EmptyListProps) => {
  // const { stories, title } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={[styles.center, styles.storyListContainer]}>
      <WibuView style={styles.emptyList}>
        <WibuIcon name={EIconName.BOOK} size={ESize.M} />
        <WibuText fontSize={ESize.XL}>No stories available</WibuText>
      </WibuView>
    </WibuView>
  );
};

export default EmptyList;
