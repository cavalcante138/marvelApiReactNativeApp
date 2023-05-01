import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Arrow, ButtonNumbers, ButtonNumbersText, Container, PaginationContainer } from './styles';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  limit: number;
}

export function Pagination({
  page,
  setPage,
  setOffset,
  total,
  limit
}: PaginationProps) {

  const theme = useTheme();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i);
  }

  const [selectedPage, setSelectedPage] = React.useState(page);

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1);
      setOffset(
        (page - 1) * 4
      );
      setSelectedPage(page - 1);
    }
  }

  const nextPage = () => {
    if (page < pageNumbers.length - 1) {
      setPage(page + 1);
      setOffset(
        (page + 1) * 4
      );
      setSelectedPage(page + 1);
    }
  }

  return (
    <Container>
      <Arrow onPress={previousPage}>
        <AntDesign name="caretleft" size={20}
          style={{ opacity: page > 0 ? 1 : 0.35 }}
          color={
            page > 0 ? theme.colors.primary : theme.colors.primary_light
          } /></Arrow>
      <PaginationContainer>
      {[
        pageNumbers[page - 2],
        pageNumbers[page - 1],
        pageNumbers[page],
        pageNumbers[page + 1],
        pageNumbers[page + 2]].map((number) => {
          if (isNaN(number)) {
            return null;
          }
          return (
            <ButtonNumbers
              key={number}
              onPress={
                () => {
                  setSelectedPage(number - 1);
                  setPage(number - 1);
                  setOffset(
                    (number - 1) * 4
                  );
                }
              }
              active={selectedPage === number - 1}
            >
              <ButtonNumbersText
                active={selectedPage === number - 1}
              >{number}</ButtonNumbersText>
            </ButtonNumbers>)

        })}
        </PaginationContainer>
      <Arrow onPress={nextPage}><AntDesign
        name="caretright"
        size={20}
        style={{ opacity: page < pageNumbers.length - 1 ? 1 : 0.35 }}
        color={
          page < pageNumbers.length - 1 ? theme.colors.primary : theme.colors.primary_light
        } /></Arrow>
    </Container>
  );
}