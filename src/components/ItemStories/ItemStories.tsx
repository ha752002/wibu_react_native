import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './ItemStories.types.ts';
import {
  Image,
  // TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Banners from '../Banners/Banners.tsx';

import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
// import { useTheme  } from '../../hooks/useTheme.ts';
import { styleCreator } from './ItemStories.styles.ts';
// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

const ItemStories = (props: StoriesProps) => {
  const { stories, size } = props;
  // const {Colors ,Layout } = useTheme()

  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  const containerStyle = [
    styles.itemStoriesContainer,
    size === 'large' ? styles.largeContainer : styles.smallContainer,
  ];

  const imgStyle = [
    styles.img,
    size === 'large' ? styles.largeImg : styles.smallImg,
  ];

  return (
    <WibuView style={containerStyle}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate(ScreenNames.MANGA, { id: 1 });
        }}
      >
        <View>
          <Image source={{ uri: stories?.thumbnail }} style={imgStyle} />
          <WibuText
            fontSize={ESize.M}
            numberOfLines={2}
            color={'fgColorGray700'}
          >
            {stories?.name}
          </WibuText>
        </View>
      </TouchableWithoutFeedback>
      <WibuText fontSize={ESize.S}>{stories?.author || 'Updating...'}</WibuText>
      <Banners storyInformation={stories} />
    </WibuView>
  );
};

export default ItemStories;
