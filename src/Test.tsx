import { PanResponder, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import React from 'react';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';

export const Test = () => {
  const scrollPosition = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollPosition.value = event.contentOffset.y;
    },
  });

  const pullDownPosition = useSharedValue(0);
  const panResponderRef = React.useRef(
    PanResponder.create({
      onPanResponderMove: (event, gestureState) => {
        pullDownPosition.value = gestureState.dy;
        console.log(gestureState.dy);
      },
    }),
  );

  const pullDownStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: pullDownPosition.value,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[styles.root, pullDownStyles]}
      {...panResponderRef.current.panHandlers}
    >
      <Animated.FlatList
        bounces={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        data={Array(1000)
          .fill(0)
          .map((_, i) => i)}
        keyExtractor={(item, index) => index + ''}
        overScrollMode="never"
        renderItem={({ item }) => (
          <WibuView width={100} height={100} backgroundColor={'red'}>
            <WibuText>{item}</WibuText>
          </WibuView>
        )}

        // Add new props after this line: 👇
        //-----------------------------------
      />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffabe7',
  },
  refreshContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 36,
    height: 36,
    marginTop: -18,
    marginLeft: -18,
    borderRadius: 18,
    objectFit: 'contain',
  },
});
