import * as React from 'react';
import { useState } from 'react';

import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { InputFieldProps } from './InputField.types.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';
import { styleCreator } from './InputField.styles.ts';
// import Story from '../../Story/Story.tsx';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import { TextInput, TouchableHighlight } from 'react-native';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const InputField = (props: InputFieldProps) => {
  const { label, onChangeText, placeholder, secureTextEntry, value, type } =
    props;
  const { Layout, Colors } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <WibuView style={[styles.center, styles.container]}>
      <WibuView style={styles.emptyList}>
        {/* <WibuIcon name={EIconName.BOOK} size={ESize.M} /> */}
        <WibuText fontSize={ESize.L}>{label}</WibuText>
        <WibuView style={[styles.groupInput, Layout.contentBetween]}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            autoCapitalize="none"
            keyboardType={type === 'email' ? 'email-address' : 'default'}
          />
          {secureTextEntry && (
            <TouchableHighlight
              onPress={togglePasswordVisibility}
              underlayColor={Colors.bgPrimary}
            >
              <WibuIcon
                name={isPasswordVisible ? EIconName.EYE : EIconName.EYE_OFF}
                size={ESize.M}
              />
            </TouchableHighlight>
          )}
        </WibuView>
      </WibuView>
    </WibuView>
  );
};

export default InputField;
