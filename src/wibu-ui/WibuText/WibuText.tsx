import * as React from 'react';
import {Text, View} from 'react-native';
import {ITextProps} from './WibuText.types.ts';
import {styleCreator} from './WibuText.styles.ts';
import {useThemeStyles} from '../../hooks/useThemeStyles.ts';

export const WibuText = (props: ITextProps) => {
  const {onPress, children} = props;
  const styles = useThemeStyles(styleCreator, props, []);
  // const fontsize = ;
  return (
    <View style={[styles.textContainer]}>
      <Text style={[styles.textStyle]} onPress={onPress}>
        {children}
      </Text>
    </View>
  );
};
