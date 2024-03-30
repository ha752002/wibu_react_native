import React from 'react';
import { TouchableHighlight } from 'react-native';
import { styleCreator } from './WibuButton.styles.ts';
import { ButtonProps } from './WibuButton.types.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import WibuText from '../WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

export const WibuButton = (props: ButtonProps) => {
  const { children, onPress, textStyle } = props;
  const styles = useThemeStyles(styleCreator, props, []);
  return (
    <WibuView style={styles.buttonContainer}>
      <TouchableHighlight
        style={[styles.buttonStyle]}
        onPress={onPress ?? (() => {})}
        underlayColor={styles.buttonStyle && styles.buttonStyle.underlayColor}
      >
        <WibuText textStyle={[styles.text, textStyle]} numberOfLines={1}>
          {children}
        </WibuText>
      </TouchableHighlight>
    </WibuView>
  );
};
