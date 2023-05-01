import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    position: relative;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
    margin-top: 50px;
    z-index: 1000;
`;

export const HeroInfoContainer = styled.ScrollView`
    flex: 1;
    padding: 0 14px;
    padding-top: 10px;
`;

export const Title = styled.Text`
font-weight: bold;
font-size: ${RFValue(16)}px;
color: ${({ theme }) => theme.colors.primary};
font-family: ${({ theme }) => theme.fonts.primary_900};
text-transform: uppercase;
`;

export const Description = styled.Text`
font-size: ${RFValue(14)}px;  
color: ${({ theme }) => theme.colors.text};
font-family: ${({ theme }) => theme.fonts.primary_300}; 
margin: 5px 0px;
`;

export const CharacterImage = styled.Image`
    width: 100%;
    height: 350px;
`;
