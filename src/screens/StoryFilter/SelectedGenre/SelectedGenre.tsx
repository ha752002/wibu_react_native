import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { SelectedGenreProps } from './SelectedGenre.types.ts';

import { styleCreator } from './SelectedGenre.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import MultiFilter from '../MultiFilter/MultiFilter.tsx';

import { ESize } from '~/enums/size.enums.ts';
import { SearchData } from '~/screens/Search/Search.types.ts';

const SelectedGenre = (props: SelectedGenreProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const { genres, selectedGenreId, searchContent } = props;
  const { Layout } = useTheme();

  return (
    <WibuView style={styles.container}>
      <WibuText color="fgColorGray700">Select genres</WibuText>
      <WibuView style={styles.genre}>
        {selectedGenreId.map(id => {
          const genreItem = genres.find(g => g.id === id);
          return genreItem ? (
            <TouchableOpacity
              key={id}
              style={[styles.genreItem, Layout.rowCenter]}
            >
              <WibuText fontSize={ESize.S} color="bgWhite">
                {genreItem.genre}
              </WibuText>
              {/* <WibuIcon name={EIconName.MINUS} color={Colors.bgWhite} size={ESize.S} /> */}
            </TouchableOpacity>
          ) : null;
        })}
        <MultiFilter
          genre={SearchData.genres}
          selectedGenreId={selectedGenreId}
          searchContent={searchContent}
        />
      </WibuView>
    </WibuView>
  );
};

export default SelectedGenre;
