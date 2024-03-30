import * as React from 'react';
import { Text } from 'react-native';
import { WibuTextProps } from './WibuText.types.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './WibuText.styles.ts';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

const WibuText = (props: WibuTextProps) => {
  const { children, textStyle, containerStyle, numberOfLines } = props;
  const style = useThemeStyles(styleCreator, props, []);
  return (
    <WibuView style={[containerStyle]}>
      <Text style={[style.textStyle, textStyle]} numberOfLines={numberOfLines}>
        {children}
      </Text>
    </WibuView>
  );
};

export default WibuText;
