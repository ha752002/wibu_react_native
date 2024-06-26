import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { PageTitleProps } from './PageTitle.types.ts';
import { TouchableOpacity } from 'react-native';

import { useTheme } from '../../hooks/useTheme.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './PageTitle.styles.ts';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
// import { ScreenNames } from '~/enums/screenNames.enum.ts';
// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const PageTitle = (props: PageTitleProps) => {
  const { title } = props;
  const { Layout } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  return (
    <WibuView style={[styles.titleContainer, Layout.rowHCenter]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <WibuIcon name={EIconName.ARROW_LEFT} size={ESize.M} />
      </TouchableOpacity>
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
