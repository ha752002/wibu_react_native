import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

import AgeWarning from '~/components/AgeWarning/AgeWarning.tsx';

// import UserInformation from '~/components/userInformation/UserInformation';
import { GenreDetailsProps } from './GenreDetails.types.ts';

import { styleCreator } from './GenreDetails.styles.ts';
import { useThemeStyles } from '../../../hooks/useThemeStyles.ts';

import { ESize } from '~/enums/size.enums.ts';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';

import { ScreenNames } from '~/enums/screenNames.enum.ts';
import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';

const GenreDetails = (props: GenreDetailsProps) => {
  const { Genre, searchContent, selectedGenreId, sort } = props;

  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  return (
    <WibuView style={styles.container}>
      <WibuView style={styles.groupTitle}>
        <WibuText fontSize={ESize.XL}>{Genre?.genre}</WibuText>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate(ScreenNames.STORYFILTER, {
              id: [selectedGenreId],
              searchKeywords: searchContent,
              sort: sort,
            });
          }}
        >
          <WibuIcon name={EIconName.FILTER} size={ESize.M} />
        </TouchableHighlight>
      </WibuView>
      <WibuText>{Genre?.describe}</WibuText>
      <AgeWarning ageWarning={Genre?.ageWarning} />
    </WibuView>
  );
};

export default GenreDetails;
