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

const Home: React.FC = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{width: 150, height: 150, backgroundColor: 'green'}}
        sharedTransitionTag="sharedTag"
        //sharedTransitionStyle={transition}
      />
      <Button
        title="Go to Screen2"
        onPress={() => {
          console.log('press navigate on Home');
          navigation.navigate('Screen2');
        }}
      />
    </View>
  );
};

export default Home;
