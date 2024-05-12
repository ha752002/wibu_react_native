import * as React from 'react';
import { WibuFormControlErrorMessageProps } from '~/wibu-ui/WibuFormControl/Components/WibuFormControlErrorMessage/WibuFormControlErrorMessage.types.ts';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import renderChildren from '~/utils/renderChildren.tsx';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import styleCreator from '~/wibu-ui/WibuFormControl/Components/WibuFormControlErrorMessage/WibuFormControlErrorMessage.styles.ts';

const WibuFormControlErrorMessage = (
  props: WibuFormControlErrorMessageProps,
) => {
  const { children, leftIcon, rightIcon } = props;
  const styles = useThemeStyles(styleCreator, props, []);
  return children ? (
    <WibuView>
      {leftIcon ?? null}
      {renderChildren({
        children,
        textProps: styles.childrentStyle,
      })}
      {rightIcon}
    </WibuView>
  ) : null;
};

export default WibuFormControlErrorMessage;
