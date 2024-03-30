import * as React from 'react';
import { View } from 'react-native';
import { WibuViewTypes } from '~/wibu-ui/WibuView/WibuView.types.ts';

const WibuView = (props: WibuViewTypes) => {
  return <View children={props.children} style={{ ...props }} />;
};

export default WibuView;
