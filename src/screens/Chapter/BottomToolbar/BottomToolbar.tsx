import * as React from 'react';
// import { useRef, useMemo } from 'react';

import {
  View,
  TouchableWithoutFeedback,
  // Text,
  TouchableHighlight,
} from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';

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
// import { log } from 'console';

const BottomToolbar = (props: BottomToolbarProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  // const bottomSheetRef = useRef<BottomSheet>(null);

  // Define bottom sheet snap points
  // const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // Handle button press
  // const handlePresentPress = () => {
  //   bottomSheetRef.current?.expand();
  //   console.log(11);

  // };

  return (
    <View>
      <WibuView style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            // navigation.navigate(ScreenNames.CHAPTER );
          }}
        >
          <WibuIcon name={EIconName.ARROW_LEFT} size={ESize.M} />
        </TouchableWithoutFeedback>

        <TouchableHighlight
          style={styles.openButton}
          // onPress={handlePresentPress}
        >
          <WibuIcon name={EIconName.LIST} size={ESize.M} />
        </TouchableHighlight>

        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(ScreenNames.LOGIN);
          }}
        >
          <WibuIcon name={EIconName.BOOK} size={ESize.M} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            // navigation.navigate(ScreenNames.CHAPTER);
          }}
        >
          <WibuIcon name={EIconName.SETTINGS} size={ESize.M} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            // navigation.navigate(ScreenNames.CHAPTER);
          }}
        >
          <WibuIcon name={EIconName.ARROW_RIGHT} size={ESize.L} />
        </TouchableWithoutFeedback>
      </WibuView>
      {/* <BottomSheet
        // ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome </Text>
          <Text>Awesome </Text>
          <Text>Awesome </Text>
          <Text>Awesome </Text>
          <Text>Awesome </Text>
        </View>
      </BottomSheet> */}
    </View>
  );
};

export default BottomToolbar;
