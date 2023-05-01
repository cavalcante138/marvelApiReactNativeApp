import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const Header = styled.View`
    width: 100%;
    padding: 0 16px;
    margin-bottom: 10px;
    padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
export const FlatListContainer = styled.View`
    flex: 1;  
`;

export const SafeAreaContainer = styled.SafeAreaView`
    margin-top: 10px;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const BottomStrip = styled.View`
    width: 100%;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
`;