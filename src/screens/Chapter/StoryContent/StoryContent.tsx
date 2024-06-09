import * as React from 'react';
import { View, Image } from 'react-native';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

import { StoryContentProps } from './StoryContent.types.ts';

import { styleCreator } from './StoryContent.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
const StoryContent = (props: StoryContentProps) => {
  const { urlImg } = props;

  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <View style={styles.container}>
      <WibuView style={styles.content}>
        {urlImg &&
          urlImg.map((url, index) => (
            <Image key={index} source={{ uri: url }} style={styles.img} />
            // <Text>áasasa</Text>
          ))}
      </WibuView>
    </View>
  );
};

export default StoryContent;
