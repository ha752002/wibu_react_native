import * as React from 'react';
import { View, TouchableHighlight, ScrollView } from 'react-native';

import { KeywordListProps } from './KeywordList.types';

import { useThemeStyles } from '~/hooks/useThemeStyles';
import { useTheme } from '~/hooks/useTheme';
import { styleCreator } from './KeywordList.styles';

import WibuText from '~/wibu-ui/WibuText/WibuText';

import { ScreenNames } from '~/enums/screenNames.enum';
import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon';
import { EIconName } from '~/enums/icon.enum';
import { ESize } from '~/enums/size.enums';
// import { TouchableHighlight } from '@gorhom/bottom-sheet';

const KeywordList = (props: KeywordListProps) => {
  const { trendingKeywords, selectedKeyword } = props;
  const { Layout, Colors } = useTheme();
  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {trendingKeywords &&
          trendingKeywords.map((trendingKeyword, index) => (
            <TouchableHighlight
              underlayColor={Colors.bgPrimary}
              key={index}
              style={[
                styles.Keyword,
                Layout.center,
                selectedKeyword === trendingKeyword.trendingKeywords &&
                  styles.selected,
              ]}
              onPress={() => {
                navigation.navigate(ScreenNames.TRENDING, {
                  id: trendingKeyword.id,
                  Sort: trendingKeyword.SortType,
                  trendingKeywords: trendingKeyword.trendingKeywords,
                });
              }}
            >
              <WibuText
                color={
                  selectedKeyword === trendingKeyword.trendingKeywords
                    ? 'bgWhite'
                    : 'fgColorGray700'
                }
              >
                {trendingKeyword.trendingKeywords}
              </WibuText>
            </TouchableHighlight>
          ))}
        <TouchableHighlight
          underlayColor={Colors.bgPrimary}
          style={[styles.Keyword, Layout.center]}
          onPress={() => {
            navigation.navigate(ScreenNames.GENRE, { id: 1 });
          }}
        >
          <WibuIcon name={EIconName.PLUS} size={ESize.M} />
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default KeywordList;
