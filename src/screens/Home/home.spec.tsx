import React from "react";
import { render } from "@testing-library/react-native";

import { Home } from ".";
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";


const Providers = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Home screen', () => {
it('should have a search input in the home screen', () => {
  const { getByPlaceholderText } = render( <Home navigation={undefined} />, { wrapper: Providers } );

  const input = getByPlaceholderText('Nome do personagem');

  expect(input.props.placeholder).toBeTruthy();
});

});