import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';
import { HeroPage } from '.';
import * as useMarvelHeroesHook from '../../hooks/useMarvelHeroes';

const mockNavigation = {
  goBack: jest.fn(),
};

const mockRoute = {
  params: {
    item: {
      id: 1,
      name: 'Spider-Man',
      thumbnail: {
        path: 'https://example.com/image',
        extension: 'jpg',
      },
    },
  },
};

const Providers: React.FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('HeroPage screen', () => {
  it('should handle back button press', () => {
    const { getByTestId } = render(
      <HeroPage navigation={mockNavigation} route={mockRoute} />,
      { wrapper: Providers }
    );
    const backButton = getByTestId('back-button');

    fireEvent.press(backButton);

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

});
