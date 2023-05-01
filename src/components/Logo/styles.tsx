import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  margin-bottom: 12px;
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const LogoTitle = styled.Text`
font-weight: bold;
font-size: ${RFValue(16)}px;
color: ${({ theme }) => theme.colors.primary};
font-family: ${({ theme }) => theme.fonts.primary_900};
text-transform: uppercase;
`;

export const LogoSubtitle = styled.Text`
font-size: ${RFValue(16)}px;
color: ${({ theme }) => theme.colors.primary};
font-family: ${({ theme }) => theme.fonts.primary_300};
text-transform: uppercase;
`;

export const BottomLine = styled.View`
  width: 54px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;



