import * as React from 'react';
import { useRef } from 'react';

import { View, TouchableWithoutFeedback } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
// import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

// import StoryContent from '../StoryContent/StoryContent.tsx';
// import ChapterList from './ChapterList/ChapterList.tsx';

import { BottomToolbarProps } from './BottomToolbar.types.ts';

import { styleCreator } from './BottomToolbar.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';

import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

const BottomToolbar = (props: BottomToolbarProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();
  const sheetRef = useRef<BottomSheet>(null);

  return (
    <View>
      <WibuView style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(ScreenNames.CHAPTER);
          }}
        >
          <WibuIcon name={EIconName.ARROW_LEFT} size={ESize.L} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          style={styles.openButton}
          onPress={() => {
            if (sheetRef.current) {
              sheetRef.current.snapTo(1);
            }
          }}
        >
          <WibuIcon name={EIconName.LIST} size={ESize.L} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(ScreenNames.CHAPTER);
          }}
        >
          <WibuIcon name={EIconName.BOOK} size={ESize.L} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(ScreenNames.CHAPTER);
          }}
        >
          <WibuIcon name={EIconName.SETTINGS} size={ESize.L} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(ScreenNames.CHAPTER);
          }}
        >
          <WibuIcon name={EIconName.ARROW_RIGHT} size={ESize.L} />
        </TouchableWithoutFeedback>
      </WibuView>
      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 0]}
        borderRadius={10}
        renderContent={() => <ChapterList />}
      /> */}
    </View>
  );
};

export default BottomToolbar;
