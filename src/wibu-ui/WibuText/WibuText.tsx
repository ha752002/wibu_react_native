import * as React from 'react';
import { Text, View } from 'react-native';
import { WibuTextProps } from './WibuText.types.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './WibuText.styles.ts';

const WibuText = (props: WibuTextProps) => {
  const { children, textStyle, containerStyle, numberOfLines } = props;
  const style = useThemeStyles(styleCreator, props, []);
  return (
    <View style={[containerStyle]}>
      <Text style={[style.textStyle, textStyle]} numberOfLines={numberOfLines}>
        {children}
      </Text>
    </View>
  );
};

export default WibuText;
