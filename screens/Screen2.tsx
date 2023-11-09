import React from 'react';
import {View, Button} from 'react-native';
import Animated, {SharedTransition, withTiming} from 'react-native-reanimated';

const animationConfig = {
  duration: 250,
};
const transition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withTiming(values.targetHeight, animationConfig),
    width: withTiming(values.targetWidth, animationConfig),
    originY: withTiming(values.targetOriginY, animationConfig),
    originX: withTiming(values.targetOriginX, animationConfig),
  };
});

const Screen2: React.FC = ({navigation}) => {
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <Animated.View
        style={{width: 100, height: 100, backgroundColor: 'green'}}
        sharedTransitionTag="sharedTag"
        //sharedTransitionStyle={transition}
      />
      <Button
        title="Go to home"
        onPress={() => {
          console.log('press navigate on Screen2');
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Screen2;
