import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    margin-top: 10px;
    margin-right: 10px;
`;

export const ComicImage = styled.Image`
  width: 120px;
  height: 180px;
`;

export const ComicTitle = styled.Text`
width: 120px;
text-align: center;
font-size: ${RFValue(12)}px;
margin-top: 3px;
font-family: ${({ theme }) => theme.fonts.primary_300};
`;