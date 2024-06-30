import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

import { TitleStoryListProps } from './TitleStoryList.types.ts';

import { TouchableHighlight } from 'react-native';

import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';
import { styleCreator } from './TitleStoryList.styles.ts';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';
import { EFontsWeight } from '~/enums/font.enum.ts';

const TitleStoryList = (props: TitleStoryListProps) => {
  const { title, more, Sort } = props;
  const { Layout, Colors } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  return (
    <>
      {title && (
        <WibuView style={[styles.center, styles.storyListContainer]}>
          <WibuView style={[styles.titleGroup, Layout.contentBetween]}>
            <WibuText
              fontWeight={EFontsWeight.Bold}
              fontSize={ESize.XL}
              color="fgColorGray700"
            >
              {title}
            </WibuText>
            {more && (
              <TouchableHighlight
                style={[styles.more]}
                underlayColor={Colors.bgPrimary}
                onPress={() => {
                  navigation.navigate(ScreenNames.TRENDING, {
                    id: more,
                    sort: Sort,
                  });
                }}
              >
                <WibuIcon name={EIconName.MORE_HORIZONTAL} size={ESize.XL} />
              </TouchableHighlight>
            )}
          </WibuView>
        </WibuView>
      )}
    </>
  );
};

export default TitleStoryList;
