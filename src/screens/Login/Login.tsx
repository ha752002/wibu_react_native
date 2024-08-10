import * as React from 'react';
import { useState } from 'react';
import { TouchableHighlight, View } from 'react-native';

import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { LoginProps } from './Login.types';
import { useThemeStyles } from '~/hooks/useThemeStyles';
import { useTheme } from '~/hooks/useTheme';
import { styleCreator } from './Login.styles';
import InputField from '~/components/InputField/InputField';
import { ESize } from '~/enums/size.enums';
import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';
import { ScreenNames } from '~/enums/screenNames.enum';

const Login = (props: LoginProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const { Layout, Colors } = useTheme();

  const navigation = useNavigation<ApplicationNavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log(JSON.stringify({ email, password }));
  };
  return (
    <WibuView style={styles.container}>
      <WibuView style={styles.content}>
        <WibuView>
          <WibuText fontSize={ESize.XXXL}>Well Come</WibuText>
          <WibuText>Sign in to start</WibuText>
        </WibuView>

        <InputField
          placeholder="email"
          type="mail"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <WibuView style={[styles.other, Layout.center]}>
          <WibuText fontSize={ESize.L}>Haven`t account?</WibuText>
          <TouchableHighlight
            underlayColor={Colors.bgPrimary}
            onPress={() => {
              navigation.navigate(ScreenNames.REGISTER);
            }}
          >
            <View>
              <WibuText fontSize={ESize.L} color="fgInProgress">
                {' '}
                Sign up!
              </WibuText>
            </View>
          </TouchableHighlight>
        </WibuView>
      </WibuView>
      <TouchableHighlight
        onPress={handleLogin}
        underlayColor={Colors.bgPrimary}
        style={[styles.button, Layout.center]}
      >
        <WibuText color="bgWhite" fontSize={ESize.M}>
          login
        </WibuText>
      </TouchableHighlight>
    </WibuView>
  );
};

export default Login;
