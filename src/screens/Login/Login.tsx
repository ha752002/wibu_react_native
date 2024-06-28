import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { LoginProps } from './Login.types';
import { useThemeStyles } from '~/hooks/useThemeStyles';
import { styleCreator } from '../Home/Home.styles';

const Login = (props: LoginProps) => {
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <WibuView>
        <WibuText>Well Come</WibuText>
        <WibuText>Sign in to start</WibuText>
      </WibuView>
    </WibuView>
  );
};

export default Login;
