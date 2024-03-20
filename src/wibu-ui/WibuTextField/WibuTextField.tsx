import * as React from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import { WibuTextFieldProps } from './WibuTextField.types.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './WibuTextField.styles.ts';

const WibuTextField = (props: WibuTextFieldProps) => {
  const { label, value, placeholder, message, disabled } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <TouchableHighlight disabled={disabled}>
      <View style={[styles.textFieldContainer]}>
        {label ? <Text style={[styles.label]}>{label}</Text> : null}
        <View>
          <TextInput
            style={[styles.textFieldStyle]}
            value={value}
            placeholder={placeholder}
          />
        </View>
        {message ? <Text style={[styles.message]}>{message}</Text> : null}
      </View>
    </TouchableHighlight>
  );
};

export default WibuTextField;
