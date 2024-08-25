import * as React from 'react';
import { useState } from 'react';
import { TouchableHighlight, View } from 'react-native';

import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { RegisterProps } from './Register.types';
import { useThemeStyles } from '~/hooks/useThemeStyles';
import { useTheme } from '~/hooks/useTheme';
import { styleCreator } from './Register.styles';
import InputField from '~/components/InputField/InputField';
import { ESize } from '~/enums/size.enums';
import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';
import { ScreenNames } from '~/enums/screenNames.enum';

const Register = (props: RegisterProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const { Layout, Colors } = useTheme();

  const navigation = useNavigation<ApplicationNavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async () => {
    console.log(JSON.stringify({ email, password, ConfirmPassword }));
  };
  return (
    <WibuView style={styles.container}>
      <WibuView style={styles.content}>
        <WibuView>
          <WibuText fontSize={ESize.XXXL}>Well Come</WibuText>
          <WibuText>Sign up to start</WibuText>
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
        <InputField
          placeholder="Confirm Password"
          secureTextEntry
          value={ConfirmPassword}
          onChangeText={setConfirmPassword}
        />

        <WibuView style={[styles.other, Layout.center]}>
          <WibuText fontSize={ESize.L}>already have an account?</WibuText>
          <TouchableHighlight
            underlayColor={Colors.bgPrimary}
            onPress={() => {
              navigation.navigate(ScreenNames.LOGIN);
            }}
          >
            <View>
              <WibuText fontSize={ESize.L} color="fgInProgress">
                {' '}
                Login!
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
          Register
        </WibuText>
      </TouchableHighlight>
    </WibuView>
  );
};

export default Register;
