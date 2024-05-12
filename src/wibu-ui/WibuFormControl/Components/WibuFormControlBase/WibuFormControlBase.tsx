import * as React from 'react';
import { WibuFormControlBaseTypes } from '~/wibu-ui/WibuFormControl/Components/WibuFormControlBase/WibuFormControlBase.types.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import styleCreator from '~/wibu-ui/WibuFormControl/Components/WibuFormControlBase/WibuFormControlBase.styles.ts';

const WibuFormControlBase = (props: WibuFormControlBaseTypes) => {
  const { children } = props;
  const style = useThemeStyles(styleCreator, props, []);
  return <WibuView style={style.containerStyle}>{children}</WibuView>;
};

export default WibuFormControlBase;
