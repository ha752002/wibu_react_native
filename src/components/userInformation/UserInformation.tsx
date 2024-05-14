import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { UserInformationProps } from './UserInformation.types.ts';
import { Image } from 'react-native';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './UserInformation.styles.ts';
// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const UserInformation = (props: UserInformationProps) => {
  const { name, avatar, introduce } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.userInformationContainer}>
      <WibuView style={styles.userInformationStyleGroup}>
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
    </WibuView>
  );
};

export default UserInformation;
