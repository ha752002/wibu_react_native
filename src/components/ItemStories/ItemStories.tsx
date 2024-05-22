import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { StoriesProps } from './ItemStories.types.ts';
import { Image } from 'react-native';

import { useThemeStyles } from '../../hooks/useThemeStyles.ts';
import { styleCreator } from './ItemStories.styles.ts';
// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';
import { WibuButton } from '~/wibu-ui/WibuButton/WibuButton.tsx';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const ItemStories = (props: StoriesProps) => {
  const { stories, size } = props;
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
      {/* <TouchableHighlight onPress={() => navigation.navigate(ScreenNames.MANGA)}> */}
      <Image source={{ uri: stories?.thumbnail }} style={imgStyle} />
      <WibuText fontSize={ESize.XL} numberOfLines={1} color={'fgColorGray700'}>
        {stories?.name}
      </WibuText>
      {/* </TouchableHighlight> */}
      <WibuText>{stories?.author}</WibuText>
      <WibuButton
        appearance={'filled'}
        onPress={() => {
          navigation.navigate(ScreenNames.MANGA);
        }}
        variant={'primary'}
      >
        MANGA
      </WibuButton>
    </WibuView>
  );
};

export default ItemStories;
