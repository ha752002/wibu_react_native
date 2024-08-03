import * as React from 'react';
import { useState } from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

import { UserInformationProps } from './UserInformation.types.ts';
import { Image, TouchableOpacity } from 'react-native';

import { useTheme } from '../../hooks/useTheme.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './UserInformation.styles.ts';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import AccountSettings from './AccountSettings/AccountSettings.tsx';

const UserInformation = (props: UserInformationProps) => {
  const { name, avatar, introduce } = props;
  const { Layout } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);

  const [isAccountSettings, setIsAccountSettings] = useState(false);

  return (
    <WibuView style={[styles.container, Layout.center, Layout.contentBetween]}>
      <WibuView style={[Layout.contentBetween]}>
        <WibuView style={[styles.userInformationGroup, Layout.rowHCenter]}>
          <Image
            style={styles.userInformationStyle}
            source={{
              uri: avatar,
            }}
          />
          <WibuView style={styles.user}>
            <WibuText fontSize={ESize.M}>{introduce}</WibuText>
            <WibuText fontSize={ESize.L} color="fgColorGray700">
              {name}
            </WibuText>
          </WibuView>
        </WibuView>
        <TouchableOpacity
          style={styles.settings}
          onPress={() => setIsAccountSettings(!isAccountSettings)}
        >
          <WibuIcon name={EIconName.SETTINGS} size={ESize.M} />
        </TouchableOpacity>
        {isAccountSettings ? <AccountSettings /> : null}
      </WibuView>
    </WibuView>
  );
};

export default UserInformation;
