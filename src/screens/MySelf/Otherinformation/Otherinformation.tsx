import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { UserInformationProps } from './Otherinformation.types.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';
import { styleCreator } from './Otherinformation.styles.ts';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const Otherinformation = (props: UserInformationProps) => {
  const { aboutMe, bookcase, followers, storyPosted, selectedContent } = props;
  const { Layout } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  return (
    <WibuView style={[styles.container, Layout.center]}>
      <WibuText>{aboutMe}</WibuText>
      <WibuView style={[styles.userInformationGroup, Layout.rowHCenter]}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(ScreenNames.MY_SELF, {
              id: 1,
              selectedContent: 'bookcase',
            });
          }}
        >
          <View
            style={[
              Layout.alignItemsCenter,
              styles.item,
              selectedContent === 'bookcase' ? styles.selected : null,
            ]}
          >
            <WibuText fontSize={ESize.XXXL} color="fgColorGray700">
              {bookcase}
            </WibuText>
            <WibuText fontSize={ESize.M}>Bookcase</WibuText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(ScreenNames.MY_SELF, {
              id: 1,
              selectedContent: 'followers',
            });
          }}
        >
          <View
            style={[
              Layout.alignItemsCenter,
              styles.item,
              selectedContent === 'followers' ? styles.selected : null,
            ]}
          >
            <WibuText fontSize={ESize.XXXL} color="fgColorGray700">
              {followers}
            </WibuText>
            <WibuText fontSize={ESize.M}>Followers</WibuText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(ScreenNames.MY_SELF, {
              id: 1,
              selectedContent: 'storyPosted',
            });
          }}
        >
          <View
            style={[
              Layout.alignItemsCenter,
              styles.item,
              selectedContent === 'storyPosted' ? styles.selected : null,
            ]}
          >
            <WibuText fontSize={ESize.XXXL} color="fgColorGray700">
              {storyPosted}
            </WibuText>
            <WibuText fontSize={ESize.M}>Story posted</WibuText>
          </View>
        </TouchableWithoutFeedback>
      </WibuView>
    </WibuView>
  );
};

export default Otherinformation;
