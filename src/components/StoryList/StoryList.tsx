import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './StoryList.types.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './StoryList.styles.ts';

import ColumnForm from './ColumnList/ColumnList.tsx';
import GridList from './GridList/GridList.tsx';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const StoryList = (props: StoriesProps) => {
  const { title, viewType } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  // const EmptyListMessage = () => (
  //   <WibuView style={styles.emptyList}>
  //     <WibuIcon name={EIconName.BOOK} size={ESize.M} />
  //     <WibuText fontSize={ESize.XL}>No stories available</WibuText>
  //   </WibuView>
  // );

  return (
    <WibuView style={[styles.center, styles.storyListContainer]}>
      <WibuView style={[styles.titleGroup]}>
        <WibuText fontSize={ESize.XL} color="fgColorGray700">
          {title}
        </WibuText>
      </WibuView>

      {viewType === 'grid' ? (
        <GridList {...props} />
      ) : (
        <ColumnForm {...props} />
      )}
    </WibuView>
  );
};

export default StoryList;
