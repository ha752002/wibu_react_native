import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from '~/screens/Login/Login.styles.ts';
import { useTheme } from '~/hooks/useTheme.ts';

const Login = () => {
  const styles = useThemeStyles(styleCreator, {}, []);
  const { Layout } = useTheme();
  return (
    <WibuView style={[styles.containerWrapper]}>
      <WibuView>
        <WibuText>Well Come</WibuText>
        <WibuText>Sign in to start</WibuText>
      </WibuView>
    </WibuView>
  );
};

export default Login;
