import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NothingFound } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('NothingFound component', () => {
  const errorMessage = 'No results found';
  const resetErrorMock = jest.fn();

  it('should render properly', () => {
    const { getByTestId } = render(
      <NothingFound
        testID="nothing-found"
        errorMessage={errorMessage}
        resetError={resetErrorMock}
        apiError={false}
      />,
      { wrapper: Providers }
    );
    const nothingFound = getByTestId('nothing-found');

    expect(nothingFound).toBeTruthy();
  });

  it('should display the correct error message', () => {
    const { getByText } = render(
      <NothingFound
        errorMessage={errorMessage}
        resetError={resetErrorMock}
        apiError={false}
      />,
      { wrapper: Providers }
    );
    const displayedErrorMessage = getByText(errorMessage);

    expect(displayedErrorMessage).toBeTruthy();
  });

  it('should call resetError when Reload button is pressed', () => {
    const { getByText } = render(
      <NothingFound
        errorMessage={errorMessage}
        resetError={resetErrorMock}
        apiError={true}
      />,
      { wrapper: Providers }
    );
    const reloadButton = getByText('Recarregar');

    fireEvent.press(reloadButton);

    expect(resetErrorMock).toHaveBeenCalled();
  });
});
