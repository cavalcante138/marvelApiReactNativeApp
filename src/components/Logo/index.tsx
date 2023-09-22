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
      </LogoContainer>
      <BottomLine />
    </Container>
  );
}