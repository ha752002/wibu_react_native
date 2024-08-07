import * as React from 'react';
import { useState } from 'react';

import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { SearchFormProps } from './SearchForm.types.ts';
import { TextInput, TouchableHighlight } from 'react-native';

import { useTheme } from '~/hooks/useTheme.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './SearchForm.styles.ts';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { Layout } from '~/themes/Layout.ts';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

const SearchForm = (props: SearchFormProps) => {
  const {
    searchContent,
    selectedGenreId,
    sort,
    nextScreen,
    multiSelectedGenreId,
  } = props;
  const { Layout, Colors } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchSubmit = () => {
    if (nextScreen) {
      navigation.navigate(ScreenNames.STORYFILTER, {
        id: multiSelectedGenreId || [1],
        searchKeywords: searchQuery,
        sort: sort,
      });
    } else {
      navigation.navigate(ScreenNames.GENRE, {
        id: selectedGenreId || 1,
        searchKeywords: searchQuery,
        sort: sort,
      });
    }
  };

  return (
    <WibuView style={[styles.searchFormContainer]}>
      <WibuView style={[styles.groupSearchFormStyle, Layout.rowHCenter]}>
        <WibuIcon name={EIconName.SEARCH} size={ESize.M} />
        <TextInput
          style={[styles.searchFormStyle]}
          placeholder={searchContent || 'Search manga'}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearchSubmit}
        />
        <TouchableHighlight
          style={[styles.advanced]}
          underlayColor={Colors.bgPrimary}
          onPress={() => {
            navigation.navigate(ScreenNames.SEARCH);
          }}
        >
          <WibuIcon name={EIconName.SLIDERS} size={ESize.M} />
        </TouchableHighlight>
      </WibuView>
    </WibuView>
  );
};

export default SearchForm;
