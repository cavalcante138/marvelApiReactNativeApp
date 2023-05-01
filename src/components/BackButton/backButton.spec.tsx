import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { BackButton } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from "../../global/styles/theme";

const Providers: React.FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('BackButton component', () => {
  it('should render properly', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <BackButton testID="back-button" onPress={onPressMock} />,
      { wrapper: Providers }
    );
    const button = getByTestId('back-button');

    expect(button).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <BackButton testID="back-button" onPress={onPressMock} />,
      { wrapper: Providers }
    );
    const button = getByTestId('back-button');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });

  it('should have the correct color for the icon', () => {
    const customColor = '#FF0000';
    const { getByTestId } = render(
      <BackButton testID="back-button" color={customColor} />,
      { wrapper: Providers }
    );
    const icon = getByTestId('back-button').children[0];

    expect(icon.props.color).toEqual(customColor);
  });
});
