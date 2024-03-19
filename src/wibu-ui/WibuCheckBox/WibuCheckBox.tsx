import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { WibuCheckBoxProps } from './WibuCheckBox.types.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './WibuCheckBox.styles.ts';

const WibuCheckBox = (props: WibuCheckBoxProps) => {
  const { label, checked, disabled } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  const renderCheckBox = () => {
    if (checked === 'selected') {
      return <Text style={styles.checkBoxStyle}>✓</Text>;
    } else if (checked === 'unselected') {
      return <Text style={styles.checkBoxStyle}>-</Text>;
    }
    return <Text style={styles.checkBoxStyle} />;
  };

  return (
    <TouchableOpacity disabled={disabled}>
      <View style={[styles.checkBoxContainer]}>
        <View>{renderCheckBox()}</View>
        <Text style={[styles.label]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WibuCheckBox;
