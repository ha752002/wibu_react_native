import * as React from 'react';
import {Text, View} from 'react-native';
import {ITextProps} from './WibuText.types.ts';
import {styleCreator} from './WibuText.styles.ts';
import {useThemeStyles} from '../../hooks/useThemeStyles.ts';

export const WibuText = (props: ITextProps) => {
  const {onPress} = props;
  const styles = useThemeStyles(styleCreator, props, []);
  // const fontsize = ;
  return (
    <View>
      <Text style={[styles.textStyle]} onPress={onPress}>
        kkkkk
      </Text>
    </View>
  );
};
