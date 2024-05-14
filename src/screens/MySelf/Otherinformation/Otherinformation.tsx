import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { UserInformationProps } from './Otherinformation.types.ts';
// import { Text, TextInput, TouchableHighlight, View, Image } from 'react-native';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './Otherinformation.styles.ts';
// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const Otherinformation = (props: UserInformationProps) => {
  const { AboutMe, bookcase, followers, storyFollowed } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.userInformationContainer}>
      <WibuText>{AboutMe}</WibuText>
      <WibuView style={styles.userInformationStyleGroup}>
        <WibuView style={styles.userInformationStyle}>
          <WibuText fontSize={ESize.XXXL} color="fgColorGray700">
            {bookcase}
          </WibuText>
          <WibuText fontSize={ESize.M}>bookcase</WibuText>
        </WibuView>
        <WibuView style={styles.userInformationStyle}>
          <WibuText fontSize={ESize.XXXL} color="fgColorGray700">
            {followers}
          </WibuText>
          <WibuText fontSize={ESize.M}>followers</WibuText>
        </WibuView>
        <WibuView style={styles.userInformationStyle}>
          <WibuText fontSize={ESize.XXXL} color="fgColorGray700">
            {storyFollowed}
          </WibuText>
          <WibuText fontSize={ESize.M}>story Followed</WibuText>
        </WibuView>
      </WibuView>
    </WibuView>
  );
};

export default Otherinformation;