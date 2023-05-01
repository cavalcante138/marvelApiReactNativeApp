import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { FlatList, BackHandler, StatusBar, Text } from 'react-native';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { ListHeaderComponent } from '../../components/ListHeaderComponent';
import { Loading } from '../../components/Loading';
import { Header, FlatListContainer, SafeAreaContainer, Container, BottomStrip } from './styles';
import { Pagination } from '../../components/Pagination';
import { HeroItem } from '../../components/HeroItem';
import { MarvelHeroModel } from '../../models/MarvelHeroModel';
import { useTheme } from 'styled-components/native';
import { NothingFound } from '../../components/NothingFound';
import { SeparatorLine } from '../../components/SeparatorLine';
import { LIMIT, useMarvelHeroes } from '../../hooks/useMarvelHeroes';


export function Home({ navigation }: { navigation: any }) {

  const [searchText, setSearchText] = useState('');

  const theme = useTheme();

  const {
    heroes,
    loading,
    offset,
    setOffset,
    total,
    searchResult,
    apiError,
    page,
    setPage,
    searchMarvelHeroes,
    resetError
  } = useMarvelHeroes();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, []);


  return (
    <Container>
      <SafeAreaContainer>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Header>
          <Logo />
          <Input
            autoCorrect={false}
            selectionColor={theme.colors.primary}
            iconName={'search'}
            placeholder='Nome do personagem'
            value={searchText}
            onChange={(element: any) => {
              setSearchText(element.nativeEvent.text);
              searchMarvelHeroes(element.nativeEvent.text);
            }}
          />
        </Header>
        <FlatListContainer>
          {!loading ?
            <FlatList
              data={searchText.length > 0 ? searchResult : heroes}
              renderItem={(props) => <HeroItem
                item={props.item}
                navigation={navigation}
              />
              }
              keyExtractor={(item) => item.id.toString()}
              ListHeaderComponent={() => <ListHeaderComponent isEmpty={
                (!!apiError || (searchText.length > 0 && searchResult.length === 0)) || (heroes.length === 0)
              } />}
              ItemSeparatorComponent={() => <SeparatorLine />}
              ListEmptyComponent={() => <NothingFound
                errorMessage={apiError ? 'Opa! Parece que o Thanos usou a Manopla do Infinito novamente e bagunçou tudo por aqui.' : 'Ops, nenhum super-herói encontrado. Que tal tentar outra pesquisa e encontrar um herói que possa salvar o dia?'}
                resetError={resetError}
                apiError={!!apiError}
              />}
              stickyHeaderIndices={[0]}
              windowSize={5}
              initialNumToRender={10}
              ListFooterComponent={() => <SeparatorLine />}
            />        
            :
            <Loading />}
          {searchText.length > 0 || (!loading && !apiError)  && 
          <Pagination
            page={page}
            setPage={setPage}
            offset={offset}
            setOffset={setOffset}
            total={total}
            limit={LIMIT}
          />}
        </FlatListContainer>
      </SafeAreaContainer>
      <BottomStrip />
    </Container>
  );
}