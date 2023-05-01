import React, { useEffect, useRef } from 'react';
import { Container, ContainerText, ErrorMessage, ErrorMessageContainer, ErrorWrapper, ReloadButton, ReloadButtonText } from './styles';
import { Pressable, Text } from 'react-native';
import spiderManrror from '../../assets/spidererror.json';
import LottieView from 'lottie-react-native';


interface Props {
  errorMessage: string;
  resetError: () => void;
  apiError: boolean;
  testID?: string;
}

export function NothingFound({
  errorMessage,
  resetError,
  apiError,
  testID
}: Props){

  const anim = useRef<LottieView>(null);

  useEffect(() => {
    // fixing lottie animation bug on ios
    setTimeout(() => {
      if(anim.current){
        anim.current.play();
      }
    }, 0)
  }, [])

  return(
    <Container testID={testID}>
        <ErrorWrapper>
        <LottieView
          ref={anim}
          source={spiderManrror}
          resizeMode="cover"
          autoPlay
          loop
        />
        <ContainerText>
        <ErrorMessageContainer>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          {apiError && <ReloadButton onPress={resetError}>
            <ReloadButtonText>Recarregar</ReloadButtonText>
          </ReloadButton>}
        </ErrorMessageContainer>
        </ContainerText>
        </ErrorWrapper>
    </Container>
  );
}