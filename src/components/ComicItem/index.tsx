import { ComicModel } from "../../models/ComicModel";
import { ComicImage, ComicTitle, Container } from "./styles";

interface Props{
  item: ComicModel;
  testID?: string;
}

export const ComicItem = ({item, testID }: Props) => (
  <Container testID={testID}>
    <ComicImage
      source={{
        uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      }}
    />
    <ComicTitle>
      {item.title}
    </ComicTitle>
  </Container>
);