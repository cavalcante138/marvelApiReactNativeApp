import React from 'react';
import { render } from '@testing-library/react-native';
import { ComicItem } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';
import { ComicModel } from '../../models/ComicModel';

const Providers: React.FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('ComicItem component', () => {
  const mockComic: ComicModel = {
    id: 1,
    title: 'Spider Man Comic',
    description: 'Spider Man description',
    thumbnail: {
      path: 'https://example.com/image',
      extension: 'jpg',
    },
  };

  it('should render properly', () => {
    const { getByTestId } = render(
      <ComicItem testID="comic-item" item={mockComic} />,
      { wrapper: Providers }
    );
    const comicItem = getByTestId('comic-item');

    expect(comicItem).toBeTruthy();
  });

  it('should display the correct title', () => {
    const { getByText } = render(<ComicItem item={mockComic} />, {
      wrapper: Providers,
    });

    const title = getByText(mockComic.title);

    expect(title).toBeTruthy();
  });

  it('should display the correct image', () => {
    const { getByTestId } = render(<ComicItem testID="comic-item"  item={mockComic} />, {
      wrapper: Providers,
    });

    const image = getByTestId('comic-item').children[0];
    const expectedUri = `${mockComic.thumbnail.path}.${mockComic.thumbnail.extension}`;

    expect(image.props.source.uri).toBe(expectedUri);
  });
});
