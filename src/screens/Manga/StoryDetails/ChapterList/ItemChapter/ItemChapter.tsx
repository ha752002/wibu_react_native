import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

// import { ScrollView } from 'react-native';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { ItemChapterProps } from './ItemChapter.types.ts';

// import PageTitle from '~/components/PageTitle/PageTitle.tsx';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { Layout } from '~/themes/Layout.ts';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

import { styleCreator } from './ItemChapter.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

import { commonUtils } from '~/utils/common.utils.ts';

const ItemChapter = (props: ItemChapterProps) => {
  const { chapter } = props;
  const { Layout } = useTheme();
  const navigation = useNavigation<ApplicationNavigationProps>();

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate(ScreenNames.CHAPTER, { id: chapter?.id });
        }}
      >
        <View style={[styles.chapter, Layout.rowHCenter]}>
          <WibuView style={[styles.content, Layout.rowHCenter]}>
            <WibuIcon name={EIconName.BOOK} size={ESize.S} />
            <WibuText numberOfLines={1}>{chapter?.chapter}</WibuText>
          </WibuView>
          <WibuText>{commonUtils.formattedDate(chapter?.UpdateTime)}</WibuText>
        </View>
      </TouchableWithoutFeedback>
    </WibuView>
  );
};

export default ItemChapter;
