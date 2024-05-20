import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './StoryList.types.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './StoryList.styles.ts';

import ColumnList from './ColumnList/ColumnList.tsx';
import RowList from './RowList/RowList.tsx';
import GridList from './GridList/GridList.tsx';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
// import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const StoryList = (props: StoriesProps) => {
  const { viewType } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  // const EmptyListMessage = () => (
  //   <WibuView style={styles.emptyList}>
  //     <WibuIcon name={EIconName.BOOK} size={ESize.M} />
  //     <WibuText fontSize={ESize.XL}>No stories available</WibuText>
  //   </WibuView>
  // );

  const renderList = () => {
    switch (viewType) {
      case 'grid':
        return <GridList {...props} />;
      case 'column':
        return <ColumnList {...props} />;
      case 'row':
        return <RowList {...props} />;
      default:
        return <ColumnList {...props} />;
    }
  };
  return (
    <WibuView style={[styles.center, styles.storyListContainer]}>
      {renderList()}
    </WibuView>
  );
};

export default StoryList;
