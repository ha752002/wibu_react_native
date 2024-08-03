import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

import { AccountSettingsProps } from './AccountSettings.types.ts';
import { TouchableOpacity } from 'react-native';

import { useTheme } from '~/hooks/useTheme.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './AccountSettings.styles.ts';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

const AccountSettings = (props: AccountSettingsProps) => {
  const { logIn } = props;
  const { Layout } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  return (
    <WibuView style={[styles.container]}>
      {logIn ? (
        <WibuView>
          <TouchableOpacity
            style={[styles.itemSettings, Layout.rowHCenter]}
            onPress={() => {
              navigation.navigate(ScreenNames.MY_SELF, {});
            }}
          >
            <WibuView>
              <WibuIcon name={EIconName.USER} size={ESize.M} />
            </WibuView>
            <WibuText fontSize={ESize.L}>my personal page</WibuText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itemSettings, Layout.rowHCenter]}
            onPress={() => {
              navigation.navigate(ScreenNames.MY_SELF, {});
            }}
          >
            <WibuView>
              <WibuIcon name={EIconName.EDIT_2} size={ESize.M} />
            </WibuView>
            <WibuText fontSize={ESize.L}>Edit personal information</WibuText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itemSettings, Layout.rowHCenter]}
            onPress={() => {
              navigation.navigate(ScreenNames.MY_SELF, {});
            }}
          >
            <WibuView>
              <WibuIcon name={EIconName.EDIT} size={ESize.M} />
            </WibuView>
            <WibuText fontSize={ESize.L}>change account</WibuText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itemSettings, Layout.rowHCenter]}
            onPress={() => {
              navigation.navigate(ScreenNames.LOGIN);
            }}
          >
            <WibuView>
              <WibuIcon name={EIconName.LOG_OUT} size={ESize.M} />
            </WibuView>
            <WibuText fontSize={ESize.L}>log out</WibuText>
          </TouchableOpacity>
        </WibuView>
      ) : (
        <TouchableOpacity
          style={[styles.itemSettings, Layout.rowHCenter]}
          onPress={() => {
            navigation.navigate(ScreenNames.LOGIN);
          }}
        >
          <WibuView>
            <WibuIcon name={EIconName.LOG_IN} size={ESize.M} />
          </WibuView>
          <WibuText fontSize={ESize.L}>log in</WibuText>
        </TouchableOpacity>
      )}
    </WibuView>
  );
};

export default AccountSettings;
