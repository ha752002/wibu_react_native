import * as React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import EmptyList from '~/components/EmptyList/EmptyList.tsx';

import { genresProps } from './GenreList.types.ts';

import { styleCreator } from './GenreList.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

const GenreList = (props: genresProps) => {
  const { genres } = props;
  const { Layout, Colors } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  return (
    <WibuView style={styles.container}>
      <WibuView style={styles.genreList}>
        <FlatList
          data={genres}
          renderItem={({ item }) => (
            <TouchableHighlight
              underlayColor={Colors.bgPrimary}
              key={item.id}
              style={[styles.item, Layout.center]}
              onPress={() => {
                navigation.navigate(ScreenNames.GENRE, { id: item.id });
              }}
            >
              <WibuText color="fgColorGray700">{item.genre}</WibuText>
            </TouchableHighlight>
          )}
          // keyExtractor={item => item.id.toString()}
          numColumns={3}
          ListEmptyComponent={EmptyList}
          contentContainerStyle={styles.genreList}
        />
      </WibuView>
    </WibuView>
  );
};

export default GenreList;
