import * as React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { WibuCheckBoxProps } from './WibuCheckBox.types.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './WibuCheckBox.styles.ts';

const WibuCheckBox = (props: WibuCheckBoxProps) => {
  const { label, disabled } = props;
  const styles = useThemeStyles(styleCreator, props, []);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const renderCheckBox = () => {
    if (isChecked) {
      return (
        <Text style={[styles.checkBoxStyle, { backgroundColor: 'red' }]}>
          ✓
        </Text>
      );
    }
    return <Text style={styles.checkBoxStyle} />;
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => setIsChecked(!isChecked)}
    >
      <View style={[styles.checkBoxContainer]}>
        <View>{renderCheckBox()}</View>
        <Text style={[styles.label]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WibuCheckBox;
