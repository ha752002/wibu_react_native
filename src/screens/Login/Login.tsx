import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

const Login = () => {
  return (
    <WibuView>
      <WibuView>
        <WibuText>Well Come</WibuText>
        <WibuText>Sign in to start</WibuText>
      </WibuView>
    </WibuView>
  );
};

export default Login;
