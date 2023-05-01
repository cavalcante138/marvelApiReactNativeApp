import styled, { css } from 'styled-components/native';

interface PropsContainer {
  isKeyboardVisible: boolean;
}

export const Container = styled.View<PropsContainer>`
    ${({isKeyboardVisible }) =>  !isKeyboardVisible && css `
    flex: 1;
  `};
    justify-content: center;
    align-items: center;
`;

export const LoadingWrapper = styled.View`
    width: 200px;
    height: 200px;
`;

export const LoadingIndicator = styled.ActivityIndicator`
     margin-top: -15px;
`;