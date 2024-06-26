import * as React from 'react';
// import { View, ScrollView } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

import AgeWarning from '~/components/AgeWarning/AgeWarning.tsx';

// import UserInformation from '~/components/userInformation/UserInformation';
import { GenreDetailsProps } from './GenreDetails.types.ts';

import { styleCreator } from './GenreDetails.styles.ts';
import { useThemeStyles } from '../../../hooks/useThemeStyles.ts';

import { ESize } from '~/enums/size.enums.ts';

const GenreDetails = (props: GenreDetailsProps) => {
  const { Genre } = props;

  const styles = useThemeStyles(styleCreator, props, []);
  // const hasAgeWarning: boolean = Genre.genre.AgeWarning ;

  return (
    <WibuView style={styles.container}>
      <WibuText fontSize={ESize.XL}>{Genre?.genre}</WibuText>
      <WibuText>{Genre?.describe}</WibuText>
      <AgeWarning ageWarning={Genre?.ageWarning} />
    </WibuView>
  );
};

export default GenreDetails;
