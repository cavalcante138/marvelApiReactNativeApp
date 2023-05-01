import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import loadingSpiderMan from '../../assets/spiderman.json';
import {
  Container,
  LoadingIndicator,
  LoadingWrapper
} from './styles';
import { useTheme } from 'styled-components/native';
import { Keyboard } from 'react-native';

export function LoadingAnimation() {

  const theme = useTheme()

  const anim = useRef<LottieView>(null);

  useEffect(() => {
    // fixing lottie animation bug on ios
    setTimeout(() => {
      if (anim.current) {
        anim.current.play();
      }
    }, 0)
  }, [])

  return (
    <Container isKeyboardVisible={Keyboard.isVisible()}>
      <LoadingWrapper>
        <LottieView
          ref={anim}
          source={loadingSpiderMan}
          resizeMode="contain"
          autoPlay
          loop
        />
      </LoadingWrapper>
      <LoadingIndicator 
        size="large"
        color={theme.colors.primary}
        />
    </Container>
  );
}