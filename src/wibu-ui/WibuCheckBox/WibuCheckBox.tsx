import * as React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { WibuCheckBoxProps } from './WibuCheckBox.types.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './WibuCheckBox.styles.ts';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import { Colors } from '~/themes/Variable.ts';

const WibuCheckBox = (props: WibuCheckBoxProps) => {
  const { label, disabled } = props;
  const styles = useThemeStyles(styleCreator, props, []);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => setIsChecked(!isChecked)}
    >
      <View style={[styles.checkBoxContainer]}>
        <View style={[isChecked ? styles.check : styles.checkBoxStyle]}>
          <WibuIcon
            name={EIconName.CHECK}
            size={ESize.S}
            color={Colors.bgWhite}
          />
        </View>
        <Text style={[styles.label]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WibuCheckBox;
