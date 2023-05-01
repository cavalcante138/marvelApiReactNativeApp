import { useMemo } from "react";
import { MarvelHeroModel } from "../../models/MarvelHeroModel";
import { Container, HeroImage, HeroName, ItemContainer } from "./styles";

interface RenderItemProps {
  item: MarvelHeroModel;
  navigation: any;
}

export const HeroItem = ({ item, navigation }: RenderItemProps) => {
  const memoizedHeroItem = useMemo(() => {
    return (
      <Container
        onPress={() => {
          navigation.navigate('HeroPage', { item: item });
        }}
      >
        {({ pressed }) => (
          <ItemContainer isPressed={pressed}>
            <HeroImage
              source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
            />
            <HeroName>{item.name}</HeroName>
          </ItemContainer>
        )}
      </Container>
    );
  }, [item.id, navigation]);

  return memoizedHeroItem;
};