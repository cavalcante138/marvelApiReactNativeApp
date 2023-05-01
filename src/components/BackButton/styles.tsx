import styled from 'styled-components/native';

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.white};
  height: 44px;
  width: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  opacity: 1;
  // create a drop shadow
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  `;



