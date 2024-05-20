import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { SearchFormProps } from './SearchForm.types.ts';
import { TextInput } from 'react-native';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './SearchForm.styles.ts';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { Layout } from '~/themes/Layout.ts';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

const SearchForm = (props: SearchFormProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  return (
    <WibuView style={[styles.searchFormContainer]}>
      <WibuView style={[styles.groupSearchFormStyle]}>
        <WibuIcon name={EIconName.SEARCH} size={ESize.M} />
        <TextInput
          style={[styles.searchFormStyle]}
          placeholder="Search manga"
        />
        <WibuIcon name={EIconName.SLIDERS} size={ESize.M} />
      </WibuView>
    </WibuView>
  );
};

export default SearchForm;
