import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { seriesProps } from './Story.types.ts';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import Banners from '../Banners/Banners.tsx';

import { useTheme } from '../../hooks/useTheme.ts';
import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './Story.styles.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

import { commonUtils } from '../../utils/common.utils.ts';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

const Story = (props: seriesProps) => {
  const { series } = props;
  const { Layout } = useTheme();

  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  return (
    <WibuView style={styles.storyContainer}>
      <Image source={{ uri: series?.thumbnail }} style={styles.img} />
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate(ScreenNames.MANGA, { id: series?.id });
        }}
      >
        <View style={styles.storyInformation}>
          <WibuView style={styles.basicInformation}>
            <WibuText
              fontSize={ESize.L}
              numberOfLines={1}
              color={'fgColorGray700'}
            >
              {series?.name}
            </WibuText>
            <WibuText>{series?.author || 'Updating...'}</WibuText>
          </WibuView>
          <WibuView style={[Layout.contentBetween]}>
            <WibuText>Chapter : {series?.chapter || 0}</WibuText>
            <WibuText>
              {commonUtils.formatViews(series?.views || 0)} Views
            </WibuText>
          </WibuView>
        </View>
      </TouchableWithoutFeedback>

      <Banners storyInformation={series} />
    </WibuView>
  );
};

export default Story;
