import * as React from 'react';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {WibuTextProps} from './WibuText.types.ts';

export const WibuText: FC<WibuTextProps> = ({...props}: WibuTextProps) => {
  const {children} = props;
  return (
    <View>
      <Text {...props}>{children}</Text>
    </View>
  );
};
