import React, { useEffect } from 'react';

import MarvelLogoSvg from '../../assets/marvelLogo.svg';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

import {
 Container
} from './styles';

export function Splash({navigation}: {navigation: any}){


  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, 
        [0, 50], 
        [1, 0],
        ),
        transform: [
          {
            translateX: interpolate(splashAnimation.value, 
              [0, 50],
              [0, -50],
              Extrapolate.CLAMP
              )
          }
        ]
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, 
        [0, 50], 
        [0, 1],
        ),
        transform: [
          {
            translateX: interpolate(splashAnimation.value, 
              [0, 50],
              [-50, 0],
              Extrapolate.CLAMP
              )
          }
        ]
    }
  })

  const startApp = () => {
    navigation.navigate('Home');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50, 
      { duration: 1000 },
      () => {
        'worklet'
        runOnJS(startApp)();
      }
    );
  }, [])
  
  return(
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute'}]}>
          <MarvelLogoSvg />
      </Animated.View>
      <Animated.View style={[logoStyle , { position: 'absolute'}]}>
          <MarvelLogoSvg />
      </Animated.View>
    </Container>
  );
}