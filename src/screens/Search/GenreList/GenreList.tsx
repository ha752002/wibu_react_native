import * as React from 'react';
import { FlatList } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';
import EmptyList from '~/components/EmptyList/EmptyList.tsx';

import { genresProps } from './GenreList.types.ts';

import { styleCreator } from './GenreList.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';

const GenreList = (props: genresProps) => {
  const { genres } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <WibuText>trending keywords!</WibuText>

      <WibuView style={styles.genreList}>
        <FlatList
          data={genres}
          renderItem={({ item }) => (
            <WibuView style={styles.item}>
              <WibuText color="fgColorGray700">{item}</WibuText>
            </WibuView>
          )}
          // keyExtractor={item => item.id.toString()}
          numColumns={3}
          ListEmptyComponent={EmptyList}
          contentContainerStyle={styles.storyList}
        />
      </WibuView>
    </WibuView>
  );
};

export default GenreList;
