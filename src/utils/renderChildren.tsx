import * as React from 'react';
import { WibuTextProps } from '~/wibu-ui/WibuText/WibuText.types.ts';
import { typeUtils } from '~/utils/type.utils.ts';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

type RenderChildrenType = {
  children: any;
  textProps?: WibuTextProps;
};

const RenderChildren = (props: RenderChildrenType) => {
  const { children, textProps } = props;
  if (!children) {
    return null;
  }
  return React.Children.map(children, child => {
    const isStringOrNumber = typeUtils.checkStringOrNumber(child);
    return isStringOrNumber ? (
      <WibuText {...textProps}>{child}</WibuText>
    ) : (
      child
    );
  });
};

export default RenderChildren;
