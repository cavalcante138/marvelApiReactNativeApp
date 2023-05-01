import React from 'react';

import {
 Container,
 LogoContainer,
 LogoTitle,
 LogoSubtitle,
 BottomLine
} from './styles';

export function Logo(){
  return(
    <Container>
      <LogoContainer>
        <LogoTitle>
          Busca Marvel
        </LogoTitle>
        <LogoSubtitle>
          Teste React Native
        </LogoSubtitle>
      </LogoContainer>
      <BottomLine />
    </Container>
  );
}