import React from 'react';

import {
 Container,
 Title
} from './styles';

interface Props{
  isEmpty: boolean;
}

export function ListHeaderComponent({
  isEmpty
}: Props){
  return(
    <Container>
      {!isEmpty && <Title>Nome</Title>}
    </Container>
  );
}