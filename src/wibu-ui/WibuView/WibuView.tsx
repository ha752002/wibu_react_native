import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { WibuViewTypes } from '~/wibu-ui/WibuView/WibuView.types.ts';

const WibuView = (props: WibuViewTypes) => {
  const viewStyle: ViewStyle = { ...props };
  return <View children={props.children} style={[viewStyle, props.style]} />;
};

export default WibuView;
