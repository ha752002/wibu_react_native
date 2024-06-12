import * as React from 'react';
// import { View, Image, ScrollView } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';

import { GenresProps } from './Genres.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

// import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './Genres.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';

const Genres = (props: GenresProps) => {
  const { genres } = props;
  const { Layout } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={[styles.container, Layout.rowHCenter]}>
      <WibuView>
        <WibuText>genre :</WibuText>
      </WibuView>
      {genres &&
        genres.map((genre, index) => (
          <WibuView key={index} style={styles.genre}>
            <WibuText color="bgWhite">{genre.genre}</WibuText>
          </WibuView>
        ))}
    </WibuView>
  );
};

export default Genres;
