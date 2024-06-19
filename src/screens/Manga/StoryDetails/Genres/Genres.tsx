import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';

import { GenresProps } from './Genres.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

// import { ESize } from '~/enums/size.enums.ts';
import { styleCreator } from './Genres.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

const Genres = (props: GenresProps) => {
  const { genres } = props;
  const { Layout } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  return (
    <WibuView style={[styles.container, Layout.rowHCenter]}>
      <WibuView>
        <WibuText>genre :</WibuText>
      </WibuView>
      {genres &&
        genres.map((genre, index) => (
          <TouchableHighlight
            key={index}
            style={styles.genre}
            onPress={() => {
              navigation.navigate(ScreenNames.GENRE, { id: genre.id });
            }}
          >
            <WibuText color="bgWhite">{genre.genre}</WibuText>
          </TouchableHighlight>
        ))}
    </WibuView>
  );
};

export default Genres;
