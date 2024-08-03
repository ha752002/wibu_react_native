import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { InputFieldProps } from './InputField.types.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './InputField.styles.ts';
// import Story from '../../Story/Story.tsx';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';
import { TextInput } from 'react-native-gesture-handler';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const InputField = (props: InputFieldProps) => {
  const { label, onChangeText, placeholder, secureTextEntry, value } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={[styles.center, styles.container]}>
      <WibuView style={styles.emptyList}>
        {/* <WibuIcon name={EIconName.BOOK} size={ESize.M} /> */}
        <WibuText fontSize={ESize.L}>{label}</WibuText>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
      </WibuView>
    </WibuView>
  );
};

export default InputField;
