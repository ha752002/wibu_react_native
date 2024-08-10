import * as React from 'react';
import { WibuFormControl } from '~/wibu-ui/WibuFormControl/WibuFormControl.tsx';

const Email = () => {
  return (
    <WibuFormControl>
      <WibuFormControl.Label>Login</WibuFormControl.Label>
    </WibuFormControl>
  );
};

const LoginFormControl = { Email };
export default LoginFormControl;
