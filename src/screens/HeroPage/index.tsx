import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { CharacterImage, Container, Description, Header, HeroInfoContainer, Title } from './styles';
import { BackButton } from '../../components/BackButton';;
import { FlatList } from 'react-native-gesture-handler';
import { MarvelHeroModel } from '../../models/MarvelHeroModel';
import { Loading } from '../../components/Loading';
import { ComicItem } from '../../components/ComicItem';
import { useMarvelHeroes } from '../../hooks/useMarvelHeroes';


export const HeroPage = ({ route, navigation }: any) => {
  const [hero, setHero] = React.useState<MarvelHeroModel>();
  const { item } = route.params;

  const {
    loading,
    comics,
    getHeroComics,
  } = useMarvelHeroes();

  useEffect(() => {
    setHero(item);
    getHeroComics(item.id);
  }, []);

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <Container testID='hero-page'>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} testID='back-button' />
      </Header>
      {hero && <>
        <CharacterImage
          source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
        />
      </>}
      <HeroInfoContainer
        showsVerticalScrollIndicator={false}
      >
        {hero && <><Title>{hero.name}</Title>
          <Description>{hero.description ? hero.description :
            "Nenhuma descrição foi encontrada para este personagem"}</Description>
        </>}
        {comics.length > 0 && <Title>Comics</Title>}
        {!loading ?
          <>
            <FlatList
              data={comics}
              keyExtractor={(item) => String(item.id)}
              horizontal
              renderItem={(props) => <ComicItem
                item={props.item}
                />
              }
              showsHorizontalScrollIndicator={false}
              windowSize={5}
              removeClippedSubviews
              initialNumToRender={10}
              style={{ marginBottom: 30 }}
            /></> : <Loading />}
      </HeroInfoContainer>
    </Container>
  );
};