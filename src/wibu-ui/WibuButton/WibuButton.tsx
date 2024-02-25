import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {styleCreator} from './WibuButton.styles.ts';
import {ButtonProps} from './WibuButton.type.ts';
import {useThemeStyles} from '../../hooks/useThemeStyles.ts';

export const WibuButton = (props: ButtonProps) => {
  const {text, onPress} = props;
  const styles = useThemeStyles(styleCreator, props, []);
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        style={[styles.buttonStyle]}
        onPress={onPress}
        underlayColor={styles.buttonStyle && styles.buttonStyle.underlayColor}>
        <Text style={[styles.text]} numberOfLines={1}>
          {text}
        </Text>
      </TouchableHighlight>
    </View>
  );
};
